const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('src/data/projects.ts', 'utf8');
const urlRegex = /"url":\s*"([^"]+)"/g;
let match;
const urls = [];
while ((match = urlRegex.exec(content)) !== null) {
  urls.push(match[1]);
}

const videoUrls = urls.filter(u => /\.(mp4|mkv|avi|mov|webm)$/i.test(u));
const imageUrls = urls.filter(u => /\.(png|jpg|jpeg|webp)$/i.test(u));

const uniqueVideos = Array.from(new Set(videoUrls));
const uniqueImages = Array.from(new Set(imageUrls));

let totalVideoBytes = 0;
uniqueVideos.forEach(u => {
  const rel = decodeURIComponent(u.replace('/projects-media/', ''));
  const full = path.resolve('3d work/3D work', rel);
  if (fs.existsSync(full)) totalVideoBytes += fs.statSync(full).size;
});

let totalImageBytes = 0;
uniqueImages.forEach(u => {
  const rel = decodeURIComponent(u.replace('/projects-media/', ''));
  const full = path.resolve('3d work/3D work', rel);
  if (fs.existsSync(full)) totalImageBytes += fs.statSync(full).size;
});

console.log('Total referenced videos:', uniqueVideos.length, 'Size:', (totalVideoBytes / (1024 * 1024)).toFixed(2), 'MB');
console.log('Total referenced images:', uniqueImages.length, 'Size:', (totalImageBytes / (1024 * 1024)).toFixed(2), 'MB');
console.log('Combined referenced media size:', ((totalVideoBytes + totalImageBytes) / (1024 * 1024)).toFixed(2), 'MB');
