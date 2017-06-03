const Clarifai = require('./clarifai');

class ClarifaiModel extends Clarifai {
  constructor(model=null) {
    super();
    this.model = model;
  }

  create(callback) {
    this.app.models.create(this.model)
      .then(
        (response) => callback(null, response),
        (err) => callback(err)
      );
  }

  index(callback) {
    this.app.models.list()
      .then(
        (response) => callback(null, response),
        (err) => callback(err)
      );
  }

  predict(url, callback) {
    this.app.models.predict(this.model, url)
      .then(
        (response) => callback(null, response),
        (err) => callback(err)
      );
  }

  updateConcepts(concepts, callback) {
    this.app.models.initModel(this.model)
      .then((model) => {
          model.mergeConcepts(concepts)
            .then(
              (response) => callback(null, response),
              (err) => callback(err)
            );
        },
        (err) => callback(err)
      );
  }

  train(callback) {
    this.app.models.train(this.model)
      .then(
        (response) => callback(null, response),
        (err) => callback(err)
      );
  }
};

module.exports = ClarifaiModel;
