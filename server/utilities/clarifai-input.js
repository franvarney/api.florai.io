const Clarifai = require('./clarifai');

class ClarifaiInput extends Clarifai {
  constructor() {
    super();
  }

  add(input, callback) {
    this.app.inputs.create(input)
      .then(
        (response) => callback(null, response),
        (err) => callback(err)
      );
  }

  search(concept, callback) {
    this.app.inputs.search({
      concept: {
        name: concept
      }
    })
      .then(
        (response) => callback(null, response),
        (err) => callback(err)
      );
  }
};

module.exports = ClarifaiInput;
