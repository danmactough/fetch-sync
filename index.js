const fetch = require('node-fetch');
const syncify = require('@snek/syncify');

module.exports = function (url, options = {}) {
  const req = fetch(url, options).then(res => res.text());
  return syncify(req);
};
