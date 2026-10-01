const fs = require('fs');
const content = fs.readFileSync('src/data/projects.ts', 'utf8');
const regex = /"folderName":\s*"([^"]+)"/g;
let match;
const folders = [];
while ((match = regex.exec(content)) !== null) {
  folders.push(match[1]);
}
console.log('Project folders in projects.ts (' + folders.length + '):', folders);

// Now check all media urls referenced in projects.ts
const urlRegex = /"url":\s*"([^"]+)"/g;
const urls = [];
while ((match = urlRegex.exec(content)) !== null) {
  urls.push(match[1]);
}
console.log('Total referenced media URLs:', urls.length);

// Check sizes of these files on disk
let totalBytes = 0;
const largeFiles = [];
for (const u of urls) {
  const rel = decodeURIComponent(u.replace('/projects-media/', ''));
  const filePath = '3d work/3D work/' + rel;
  if (fs.existsSync(filePath)) {
    const size = fs.statSync(filePath).size;
    totalBytes += size;
    if (size > 20 * 1024 * 1024) {
      largeFiles.push({ path: filePath, mb: (size / (1024*1024)).toFixed(2) });
    }
  } else {
    console.log('MISSING:', filePath);
  }
}
console.log('Total referenced media size:', (totalBytes / (1024*1024)).toFixed(2), 'MB');
console.log('Referenced files > 20MB:', largeFiles);
