const request = require('request-promise');
const config = require('./config');
s()
function s() {
  const opts = {
    method: 'GET',
    uri: `${config.link}.json`,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36'
    },
    gzip: true,
    json: true
  }
  request(opts)
    .then(function (json) {
      json.product.variants.forEach(function(size) {
        console.log(`${size.title} - http://${config.link.split('//')[1].split('/')[0]}/cart/${size.id}:1`);
      })
    })
}
