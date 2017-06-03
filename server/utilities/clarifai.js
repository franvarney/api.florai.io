const ClarifaiSdk = require('clarifai');

const Config = require('../../config');

class Clarifai {
  constructor() {
    this.app = new ClarifaiSdk.App(
      Config.clarifai.client_id,
      Config.clarifai.client_secret
    );
  }
}

module.exports = Clarifai;
