import fs from 'fs';
import path from 'path';

const targets = ['app', 'components', 'lib', 'data', 'public'];
const patterns = ['vercel', 'mixkit', 'unsplash', 'aceternity', 'magicui', 'shadcn', 'github', 'template', 'boilerplate', 'create next app'];

function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      scanDir(full);
    } else if (f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.json') || f.endsWith('.html') || f.endsWith('.css') || f.endsWith('.md')) {
      const content = fs.readFileSync(full, 'utf8');
      for (const p of patterns) {
        if (content.toLowerCase().includes(p)) {
          const lines = content.split('\n');
          lines.forEach((line, idx) => {
            if (line.toLowerCase().includes(p)) {
              console.log(`${full}:${idx+1} [${p}] -> ${line.trim()}`);
            }
          });
        }
      }
    }
  }
}

console.log('--- SCANNING CODEBASE FOR THIRD-PARTY BRANDING & PLACEHOLDERS ---');
targets.forEach(scanDir);
console.log('--- SCAN COMPLETE ---');
