const KnockKnock = require('knock-knock');

module.exports = [
  {
    method: 'GET',
    path: '/ping',
    handler: (request, reply) => KnockKnock(reply)
  }
];
