const ClarifaiInput = require('../utilities/clarifai-input');

exports.create = function(request, reply) {
  const input = new ClarifaiInput();

  input.add(request.payload.url, (err, results) => {
    if (err) return reply(err);
    return reply(results);
  });
};

exports.get = function(request, reply) {
  const input = new ClarifaiInput();

  input.search(request.params.concept, (err, results) => {
    if (err) return reply(err);
    return reply(results);
  });
};
