const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const ffmpeg = require('@ffmpeg-installer/ffmpeg');

const baseDir = path.resolve(__dirname, '..', '3d work', '3D work');
const backupDir = path.resolve(__dirname, '..', 'media_originals_backup');

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

function walk(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      results = results.concat(walk(full));
    } else {
      results.push(full);
    }
  });
  return results;
}

const allFiles = walk(baseDir);

const targets = [];

allFiles.forEach(fp => {
  const rel = path.relative(baseDir, fp);
  const ext = path.extname(fp).toLowerCase();
  const size = fs.statSync(fp).size;
  const sizeMb = size / (1024 * 1024);

  // Skip the two huge non-project files if they exist (they are ignored in git/vercel)
  if (fp.includes('Forever - Anno Domini Beats') || fp.includes('Tutorial_(2).avi')) {
    return;
  }

  // Also skip files in media_originals_backup
  if (fp.includes('media_originals_backup')) {
    return;
  }

  if (ext === '.avi' || ext === '.mkv') {
    targets.push({ fp, rel, ext, sizeMb, action: 'convert_to_mp4' });
  } else if (ext === '.mp4' && sizeMb > 12) {
    targets.push({ fp, rel, ext, sizeMb, action: 'compress_mp4' });
  }
});

console.log(`\nFound ${targets.length} files remaining to optimize:`);
let totalOriginalMb = 0;
targets.forEach((t, i) => {
  totalOriginalMb += t.sizeMb;
  console.log(`${i + 1}. [${t.action}] ${t.rel} (${t.sizeMb.toFixed(2)} MB)`);
});
console.log(`\nTotal size: ${totalOriginalMb.toFixed(2)} MB`);

const isRun = process.argv.includes('--run');

if (!isRun) {
  console.log('\nDRY RUN complete! Pass --run to begin optimization.');
  process.exit(0);
}

console.log('\nStarting Fast High-Quality Optimization (CRF 22, Fast Preset, Safe Backup)...\n');

let totalSavedBytes = 0;
let processedCount = 0;

targets.forEach((t, idx) => {
  console.log(`\n[${idx + 1}/${targets.length}] Processing: ${t.rel} (${t.sizeMb.toFixed(2)} MB)...`);

  // Safe Backup
  const backupPath = path.join(backupDir, t.rel);
  const backupFolder = path.dirname(backupPath);
  if (!fs.existsSync(backupFolder)) {
    fs.mkdirSync(backupFolder, { recursive: true });
  }
  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(t.fp, backupPath);
    console.log(`  ✓ Safely backed up original to: media_originals_backup/${t.rel}`);
  }

  const parsed = path.parse(t.fp);
  const targetMp4Path = path.join(parsed.dir, `${parsed.name}.mp4`);
  const tempOutputPath = path.join(parsed.dir, `${parsed.name}__temp_opt.mp4`);

  try {
    const tStart = Date.now();
    execFileSync(ffmpeg.path, [
      '-i', t.fp,
      '-c:v', 'libx264',
      '-preset', 'fast',         // Fast encoding (seconds instead of minutes)
      '-crf', '22',             // Visually lossless 100% studio quality
      '-pix_fmt', 'yuv420p',    // Universal browser support (iPhone, Safari, Chrome, Edge)
      '-c:a', 'aac',
      '-b:a', '192k',           // High quality audio
      '-movflags', '+faststart',// Instant streaming
      '-y',
      tempOutputPath
    ], { stdio: 'ignore' });

    const newSize = fs.statSync(tempOutputPath).size;
    const newSizeMb = newSize / (1024 * 1024);
    const origSize = fs.statSync(t.fp).size;
    const durationSec = ((Date.now() - tStart) / 1000).toFixed(1);

    if (t.ext === '.avi' || t.ext === '.mkv') {
      // Must convert to mp4 for browser support
      fs.unlinkSync(t.fp);
      fs.renameSync(tempOutputPath, targetMp4Path);
      console.log(`  ✓ Completed in ${durationSec}s: converted to web MP4 (${t.sizeMb.toFixed(2)} MB -> ${newSizeMb.toFixed(2)} MB)`);
      totalSavedBytes += (origSize - newSize);
      processedCount++;
    } else {
      // It's an MP4: only replace if new file is actually smaller!
      if (newSize < origSize) {
        fs.unlinkSync(t.fp);
        fs.renameSync(tempOutputPath, targetMp4Path);
        console.log(`  ✓ Completed in ${durationSec}s: ${t.sizeMb.toFixed(2)} MB -> ${newSizeMb.toFixed(2)} MB (${((1 - newSize / origSize) * 100).toFixed(1)}% reduction)`);
        totalSavedBytes += (origSize - newSize);
        processedCount++;
      } else {
        fs.unlinkSync(tempOutputPath);
        console.log(`  ℹ Already well-compressed (${t.sizeMb.toFixed(2)} MB). Kept original file.`);
      }
    }
  } catch (err) {
    console.error(`  ✗ Error optimizing ${t.rel}:`, err.message);
    if (fs.existsSync(tempOutputPath)) {
      fs.unlinkSync(tempOutputPath);
    }
  }
});

console.log(`\n========================================`);
console.log(`Optimization Complete!`);
console.log(`Processed: ${processedCount}/${targets.length} files`);
console.log(`Total space saved: ${(totalSavedBytes / (1024 * 1024)).toFixed(2)} MB`);
console.log(`All originals preserved safely in: media_originals_backup/`);
console.log(`========================================\n`);
