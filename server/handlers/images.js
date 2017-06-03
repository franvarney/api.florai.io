const Clarifai = require('../utilities/clarifai');

exports.predict = function (request, reply) {
  const clarifai = new Clarifai();

  clarifai[request.query.action](request.payload.url, (err, results) => {
    if (err) return reply(err);
    return reply(results);
  });
};
