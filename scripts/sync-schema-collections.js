const fs = require('fs');
const { COLLECTIONS_DATA } = require('../data/collections-data.ts');

const sqlValues = COLLECTIONS_DATA.map((item, idx) => {
  const esc = (s) => (s ? s.replace(/'/g, "''") : '');
  const tagsArray = "ARRAY[" + item.tags.map(t => "'" + esc(t) + "'").join(', ') + "]";
  const specsJson = JSON.stringify(item.specs).replace(/'/g, "''");
  const videoUrlVal = item.videoUrl ? "'" + esc(item.videoUrl) + "'" : 'NULL';
  return `  ('${esc(item.id)}', '${esc(item.id)}', '${esc(item.title)}', '${esc(item.category)}', '${esc(item.metalPurity)}', '${esc(item.hallmarkText)}', '${esc(item.description)}', '${esc(item.priceNote)}', true, '${esc(item.mediaType)}', '${esc(item.thumbnailUrl)}', ${videoUrlVal}, ${tagsArray}, '${specsJson}'::jsonb, 'available', true, ${idx})`;
}).join(',\n');

const fullInsert = `INSERT INTO public.collections (id, slug, title, category, metal_purity, hallmark_text, description, price_note, price_on_request, media_type, thumbnail_url, video_url, tags, specs, stock_status, is_published, sort_order)
VALUES
${sqlValues}
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  metal_purity = EXCLUDED.metal_purity,
  hallmark_text = EXCLUDED.hallmark_text,
  description = EXCLUDED.description,
  price_note = EXCLUDED.price_note,
  media_type = EXCLUDED.media_type,
  thumbnail_url = EXCLUDED.thumbnail_url,
  video_url = EXCLUDED.video_url,
  tags = EXCLUDED.tags,
  specs = EXCLUDED.specs,
  sort_order = EXCLUDED.sort_order;`;

let schema = fs.readFileSync('scripts/schema.sql', 'utf8');
const start = schema.indexOf('INSERT INTO public.collections');
const end = schema.indexOf('ON CONFLICT (id) DO UPDATE', start);
const endOfBlock = schema.indexOf(';', end) + 1;
schema = schema.substring(0, start) + fullInsert + schema.substring(endOfBlock);
fs.writeFileSync('scripts/schema.sql', schema, 'utf8');
console.log('Successfully updated scripts/schema.sql with 54 100% unique pieces!');
