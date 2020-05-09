const cf = require('cloudflare')({
  email: process.env.CF_EMAIL,
  token: process.env.CF_TOKEN
});

async function purgeCache() {
  try {
    const response = await cf.zones.purgeCache(process.env.CF_ZONE_ID, {
      purge_everything: true
    });

    console.log('- Successfully purged cache');
    console.log(response);
  } catch (err) {
    console.log('- Error occurred while clearing CF cache');
    console.log(err);
  }
}

purgeCache();
