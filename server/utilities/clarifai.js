const ClarifaiSdk = require('clarifai');

const Config = require('../../config');

class Clarifai {
  constructor(model=null) {
    this.app = new ClarifaiSdk.App(
      Config.clarifai.client_id,
      Config.clarifai.client_secret
    );
    this.model = model || ClarifaiSdk.GENERAL_MODEL;
  }

  predict(url, callback) {
    this.app.models.predict(this.model, url)
      .then(
        (response) => callback(null, response),
        (err) => callback(err)
      );
  }
}

module.exports = Clarifai;
