import { useState, useEffect, useRef, useCallback } from 'react';
import type { ProjectMediaItem } from '../types';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Maximize2,
  Film,
  Image as ImageIcon,
  ExternalLink,
  Volume2,
  VolumeX,
  Sparkles,
  Download
} from 'lucide-react';

interface ProjectMediaSliderProps {
  media: ProjectMediaItem[];
  projectTitle: string;
  initialIndex?: number;
}

export const ProjectMediaSlider = ({
  media,
  projectTitle,
  initialIndex = 0
}: ProjectMediaSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [videoError, setVideoError] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isAutoPlaySlides, setIsAutoPlaySlides] = useState<boolean>(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const currentItem = media[currentIndex] || media[0];

  // Auto scroll active thumbnail into view
  useEffect(() => {
    if (thumbnailsRef.current) {
      const activeThumb = thumbnailsRef.current.children[currentIndex] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
    setVideoError(false);
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
  }, [media.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  }, [media.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === ' ' && currentItem?.type === 'video') {
        e.preventDefault();
        toggleVideoPlay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, currentItem]);

  // Slideshow auto-advance timer
  useEffect(() => {
    if (!isAutoPlaySlides) return;
    if (currentItem?.type === 'video') return; // Don't auto advance during video

    const timer = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(timer);
  }, [isAutoPlaySlides, currentItem, handleNext]);

  const toggleVideoPlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .catch(() => setVideoError(true));
    } else {
      videoRef.current.pause();
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStart(null);
  };

  if (!media || media.length === 0) {
    return (
      <div className="p-12 text-center text-slate-400 bg-slate-900 rounded-2xl">
        No media files available for this project.
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col bg-slate-950 text-white rounded-2xl overflow-hidden border border-slate-800 shadow-2xl transition-all ${
        isFullscreen ? 'w-screen h-screen rounded-none' : 'w-full'
      }`}
    >
      {/* Top Media Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 z-20">
        <div className="flex items-center gap-2.5">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
              currentItem.type === 'video'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                : 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
            }`}
          >
            {currentItem.type === 'video' ? (
              <Film className="w-3 h-3" />
            ) : (
              <ImageIcon className="w-3 h-3" />
            )}
            <span>{currentItem.type === 'video' ? `Video (${currentItem.extension})` : 'High-Res Render'}</span>
          </span>

          <span className="text-xs font-mono text-slate-400">
            Slide {currentIndex + 1} of {media.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Slideshow Auto-Play Toggle */}
          <button
            onClick={() => setIsAutoPlaySlides(!isAutoPlaySlides)}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              isAutoPlaySlides
                ? 'bg-sky-500 text-white shadow-xs shadow-sky-500/30'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
            }`}
            title="Toggle automatic slideshow"
          >
            <Sparkles className="w-3 h-3" />
            <span className="hidden sm:inline">{isAutoPlaySlides ? 'Auto Playing' : 'Slideshow'}</span>
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            title="Toggle Fullscreen"
          >
            <Maximize2 className="w-4 h-4" />
          </button>

          {/* Direct Open Link */}
          <a
            href={currentItem.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            title="Open original media file in new tab"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main Slide Stage Viewport */}
      <div
        className="relative w-full aspect-video sm:h-[480px] md:h-[520px] bg-black flex items-center justify-center overflow-hidden select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Render Image or Video */}
        {currentItem.type === 'image' ? (
          <img
            key={currentItem.id}
            src={currentItem.url}
            alt={currentItem.caption || currentItem.name}
            className="w-full h-full object-contain animate-in fade-in zoom-in-95 duration-200"
            loading="eager"
          />
        ) : (
          <div className="relative w-full h-full flex items-center justify-center bg-black">
            {!videoError ? (
              <video
                key={currentItem.id}
                ref={videoRef}
                src={currentItem.url}
                controls
                playsInline
                autoPlay={false}
                muted={isMuted}
                preload="metadata"
                className="w-full h-full object-contain"
                onError={() => setVideoError(true)}
              />
            ) : (
              /* Fallback Card for codecs/formats not natively decoded by HTML5 */
              <div className="p-8 max-w-md text-center space-y-4 bg-slate-900/90 border border-slate-700 rounded-2xl shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 mx-auto flex items-center justify-center">
                  <Film className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Production 3D Animation Asset</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    This high-definition sequence is stored in raw <strong className="text-slate-200">.{currentItem.extension.toUpperCase()}</strong> master format.
                  </p>
                </div>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
                  <a
                    href={currentItem.url}
                    download
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-md transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Master .{currentItem.extension.toUpperCase()}</span>
                  </a>
                  <a
                    href={currentItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open in Media Player</span>
                  </a>
                </div>
              </div>
            )}

            {/* Quick Audio Toggle Overlay for Video */}
            {!videoError && (
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 z-10 p-2 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-md border border-slate-700/80 transition-all"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            )}
          </div>
        )}

        {/* Previous Button */}
        {media.length > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-slate-900/80 hover:bg-sky-600 text-white/90 hover:text-white backdrop-blur-md border border-slate-700/80 hover:border-sky-400 shadow-xl transition-all duration-150 active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        {/* Next Button */}
        {media.length > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-slate-900/80 hover:bg-sky-600 text-white/90 hover:text-white backdrop-blur-md border border-slate-700/80 hover:border-sky-400 shadow-xl transition-all duration-150 active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        {/* Slide Caption Bottom Overlay */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 sm:p-5 pointer-events-none">
          <div className="flex items-end justify-between">
            <div className="space-y-0.5">
              <span className="text-[11px] font-mono text-sky-400 uppercase tracking-wider block">
                {projectTitle}
              </span>
              <h4 className="text-sm sm:text-base font-bold text-white capitalize">
                {currentItem.name}
              </h4>
            </div>
            <div className="text-[11px] font-mono text-slate-400">
              {currentIndex + 1} / {media.length}
            </div>
          </div>
        </div>
      </div>

      {/* Filmstrip / Thumbnail Navigation Strip */}
      {media.length > 1 && (
        <div className="p-3 bg-slate-900 border-t border-slate-800">
          <div
            ref={thumbnailsRef}
            className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent"
          >
            {media.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                    isActive
                      ? 'border-sky-400 ring-2 ring-sky-500/40 scale-105 z-10'
                      : 'border-slate-700/80 hover:border-slate-500 opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`Jump to slide ${idx + 1}`}
                >
                  {item.type === 'image' ? (
                    <img
                      src={item.url}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-800 flex items-center justify-center relative">
                      <video
                        src={`${item.url}#t=0.5`}
                        preload="metadata"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Play className="w-4 h-4 text-white fill-white" />
                      </div>
                    </div>
                  )}

                  {/* Tiny index tag */}
                  <span className="absolute bottom-0.5 right-1 text-[9px] font-mono font-bold text-white/90 drop-shadow">
                    #{idx + 1}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
