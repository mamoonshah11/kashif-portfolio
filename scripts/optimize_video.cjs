const { execFileSync } = require('child_process');
const ffmpeg = require('@ffmpeg-installer/ffmpeg');
const fs = require('fs');
const path = require('path');

const inputPath = path.resolve('3d work/3D work/UVeye 3/UVeye_Video.mp4');
const backupPath = path.resolve('3d work/3D work/UVeye 3/UVeye_Video_original.mp4.bak');
const outputPath = path.resolve('3d work/3D work/UVeye 3/UVeye_Video_compressed.mp4');

console.log('Optimizing UVeye_Video with ffmpeg...');
if (!fs.existsSync(backupPath)) {
  fs.copyFileSync(inputPath, backupPath);
  console.log('Backup created at:', backupPath);
}

execFileSync(ffmpeg.path, [
  '-i', backupPath,
  '-c:v', 'libx264',
  '-crf', '24',
  '-preset', 'fast',
  '-c:a', 'aac',
  '-b:a', '128k',
  '-movflags', '+faststart',
  '-y',
  outputPath
], { stdio: 'inherit' });

const origSize = fs.statSync(backupPath).size / (1024 * 1024);
const newSize = fs.statSync(outputPath).size / (1024 * 1024);
console.log(`Original size: ${origSize.toFixed(2)} MB`);
console.log(`New size: ${newSize.toFixed(2)} MB`);

// Replace the original with the compressed version
fs.copyFileSync(outputPath, inputPath);
fs.unlinkSync(outputPath);
console.log('Successfully updated UVeye_Video.mp4');
