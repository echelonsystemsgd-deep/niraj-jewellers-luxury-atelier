const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('data/collections-data.ts', 'utf8');
const match = content.match(/export const COLLECTIONS_DATA: CollectionItem\[\] = (\[[\s\S]*?\]);/);
if (!match) {
  console.error('Could not find COLLECTIONS_DATA');
  process.exit(1);
}

const data = JSON.parse(match[1]);
console.log('Total pieces found:', data.length);

const rows = [
  ['ID', 'Title', 'Category', 'Metal Purity', 'Thumbnail URL', 'Video URL', 'Weight Spec', 'Carat Spec', 'Status', 'Issues / Defects Identified']
];

for (const item of data) {
  const issues = [];
  const titleLower = item.title.toLowerCase();
  
  // 1. Mismatched categories
  if (item.category === 'rings' && (titleLower.includes('medallion') || titleLower.includes('pendant') || titleLower.includes('choker') || titleLower.includes('necklace'))) {
    issues.push('Mismatched Category: Pendant/Medallion categorized as ring');
  }
  
  // 2. Synthetic formulaic weights (e.g. rings > 20g)
  if (item.specs && item.specs.weight) {
    const w = parseFloat(item.specs.weight);
    if (item.category === 'rings' && w > 20) {
      issues.push(`Unrealistic formula weight for ring: ${item.specs.weight}`);
    }
  }

  // 3. Known Toshakhana watermarks in video/thumbnail
  if (
    (item.videoUrl && (item.videoUrl.includes('0bda9709') || item.videoUrl.includes('259e7f7d') || item.videoUrl.includes('39b5ba11') || item.videoUrl.includes('933947d1'))) ||
    (item.thumbnailUrl && (item.thumbnailUrl.includes('86ae6de6') || item.thumbnailUrl.includes('09f3084c')))
  ) {
    issues.push('Third-party watermarked asset (TOSHAKHANA watermark present on imagery)');
  }
  
  // 4. Image/Title mismatches
  if (titleLower.includes('ruby') && item.thumbnailUrl && item.thumbnailUrl.includes('sapphire')) {
    issues.push('Image/Title color mismatch: Ruby title with sapphire CAD asset');
  }

  // Set status
  const status = issues.length > 0 ? 'DRAFT_NEEDS_OWNER_CONFIRMATION' : 'VERIFIED_PUBLISHED';
  
  rows.push([
    item.id,
    `"${item.title.replace(/"/g, '""')}"`,
    item.category,
    `"${item.metalPurity}"`,
    item.thumbnailUrl || '',
    item.videoUrl || '',
    item.specs?.weight || '',
    item.specs?.carat || '',
    status,
    `"${issues.length > 0 ? issues.join('; ') : 'Verified clean asset'}"`
  ]);
}

const csv = rows.map(r => r.join(',')).join('\n');
if (!fs.existsSync('implementation')) fs.mkdirSync('implementation', { recursive: true });
fs.writeFileSync('implementation/collections-audit-54.csv', csv);
console.log('Successfully wrote implementation/collections-audit-54.csv with ' + (rows.length - 1) + ' pieces audited.');
