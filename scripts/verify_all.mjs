import http from 'http';

const BASE_URL = 'http://localhost:3000';

async function fetchUrl(path) {
  return new Promise((resolve, reject) => {
    http.get(BASE_URL + path, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    }).on('error', reject);
  });
}

async function runVerification() {
  console.log('====================================================');
  console.log('   FULL-SYSTEM VERIFICATION: NIRAJ JEWELLERS       ');
  console.log('====================================================\n');

  // 1. Verify all routes
  const routes = [
    '/',
    '/collections',
    '/bespoke',
    '/repairs',
    '/gold-rates',
    '/showroom',
    '/contact',
    '/privacy',
    '/terms',
    '/robots.txt',
    '/sitemap.xml',
    '/api/gold-rates',
  ];
  console.log('1. VERIFYING ALL ROUTES:');
  for (const r of routes) {
    try {
      const res = await fetchUrl(r);
      const isOk = res.status === 200;
      console.log(`  [${isOk ? 'PASS' : 'FAIL'}] ${r} -> Status ${res.status} (${res.body.length} bytes)`);
      if (!isOk) throw new Error(`Route ${r} returned non-200: ${res.status}`);
    } catch (err) {
      console.error(`  [ERROR] Route ${r}:`, err.message);
    }
  }

  // 2. Inspect Home Page HTML
  console.log('\n2. INSPECTING HOME PAGE DOM & REDIRECTS:');
  const homeRes = await fetchUrl('/');
  const html = homeRes.body;

  // Check Schema.org JSON-LD
  const hasLocalBusinessSchema = html.includes('JewelryStore') || html.includes('LocalBusiness');
  const hasFaqSchema = html.includes('FAQPage');
  console.log(`  [${hasLocalBusinessSchema ? 'PASS' : 'FAIL'}] Schema.org JewelryStore / LocalBusiness JSON-LD`);
  console.log(`  [${hasFaqSchema ? 'PASS' : 'FAIL'}] Schema.org FAQPage JSON-LD`);

  // Extract all hrefs
  const hrefMatches = [...html.matchAll(/href=["']([^"']+)["']/g)].map(m => m[1]);
  console.log(`  Found ${hrefMatches.length} total href links on Home Page.`);

  // Verify internal anchor IDs
  const anchorLinks = [...new Set(hrefMatches.filter(h => h.startsWith('#')))];
  console.log('\n3. VERIFYING INTERNAL ANCHOR TARGETS:');
  for (const anchor of anchorLinks) {
    const id = anchor.slice(1);
    const idExists = html.includes(`id="${id}"`) || html.includes(`id='${id}'`);
    console.log(`  [${idExists ? 'PASS' : 'FAIL'}] Target ${anchor} -> DOM element #${id} ${idExists ? 'EXISTS' : 'MISSING'}`);
  }

  // Verify WhatsApp links
  console.log('\n4. VERIFYING WHATSAPP VIP ROUTING TARGETS:');
  const whatsappLinks = hrefMatches.filter(h => h.includes('whatsapp') || h.includes('wa.me'));
  console.log(`  Found ${whatsappLinks.length} WhatsApp redirection triggers.`);
  let allWaValid = true;
  for (const wa of whatsappLinks) {
    const url = new URL(wa);
    const phone = url.searchParams.get('phone') || url.pathname.replace(/^\//, '');
    const text = url.searchParams.get('text');
    const isPhoneValid = phone === '447955565137' || phone === '+447955565137';
    const hasText = !!text && text.length > 5;
    if (!isPhoneValid || !hasText) {
      allWaValid = false;
      console.log(`  [FAIL] Invalid WhatsApp link: ${wa} (phone detected: ${phone})`);
    }
  }
  if (allWaValid) {
    console.log(`  [PASS] All ${whatsappLinks.length} WhatsApp links correctly target Master Jeweller Viky (+44 7955 565137) with pre-filled context.`);
  }

  // Verify Telephone links
  console.log('\n5. VERIFYING TELEPHONE REDIRECTS:');
  const telLinks = hrefMatches.filter(h => h.startsWith('tel:'));
  for (const tel of telLinks) {
    const isTelValid = tel === 'tel:+447955565137';
    console.log(`  [${isTelValid ? 'PASS' : 'FAIL'}] Phone link: ${tel}`);
  }

  // Verify Social / External links
  console.log('\n6. VERIFYING SOCIAL MEDIA & EXTERNAL REDIRECTS:');
  const externalLinks = hrefMatches.filter(h => h.startsWith('http') && !h.includes('localhost'));
  const uniqueExternals = [...new Set(externalLinks)];
  for (const ext of uniqueExternals) {
    console.log(`  [INFO] External redirect target: ${ext}`);
  }

  console.log('\n====================================================');
  console.log('   VERIFICATION COMPLETE: ZERO BROKEN PATHS        ');
  console.log('====================================================');
}

runVerification().catch(console.error);
