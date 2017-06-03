const ClarifaiModel = require('../utilities/clarifai-model');

exports.create = function(request, reply) {
  const model = new ClarifaiModel(request.payload.model);

  model.create(request.payload.concepts, (err, results) => {
    console.log(err, results);
    if (err) return reply(err);
    return reply(results);
  });
};

exports.get = function(request, reply) {
  const model = new ClarifaiModel(request.params.model);

  model.predict(request.query.image_url, (err, results) => {
    if (err) return reply(err);
    return reply(results);
  });
};

exports.index = function(request, reply) {
  const model = new ClarifaiModel(request.params.model);

  model.index((err, results) => {
    if (err) return reply(err);
    return reply(results);
  });
};

exports.update = function(request, reply) {
  const model = new ClarifaiModel(request.params.model);

  model.train((err, results) => {
    if (err) return reply(err);
    return reply(results);
  });
};

exports.updateConcepts = function(request, reply) {
  const model = new ClarifaiModel(request.params.model);

  model.updateConcepts(request.payload.concepts, (err, results) => {
    if (err) return reply(err);
    return reply(results);
  });
};
