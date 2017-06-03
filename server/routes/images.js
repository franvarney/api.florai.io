const Joi = require('joi');

const ImagesHandler = require('../handlers/images');

module.exports = [
  {
    method: 'POST',
    path: '/images',
    handler: ImagesHandler.predict,
    config: {
      validate: {
        payload: {
          url: Joi.string().uri().required()
        },
        query: {
          action: Joi.string().allow(['add', 'predict']).default('predict')
        }
      }
    }
  }
];
