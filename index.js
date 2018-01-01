const request = require('request-promise');
const config = require('./config');
config.links.forEach(function(link) {
  s(link)
});
function s(link) {
  const opts = {
    method: 'GET',
    uri: `${link}.json`,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36'
    },
    gzip: true,
    json: true
  }
  request(opts)
    .then(function (json) {
      console.log(json.product.title);
      json.product.variants.forEach(function(size) {
        console.log(`${size.title} - http://${link.split('//')[1].split('/')[0]}/cart/${size.id}:1`);
      })
    })
}
