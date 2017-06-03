const Joi = require('joi');

const ModelHandler = require('../handlers/models');

module.exports = [
  {
    method: 'POST',
    path: '/models',
    handler: ModelHandler.create,
    config: {
      validate: {
        payload: {
          model: Joi.string().required()
        }
      }
    }
  },

  {
    method: 'GET',
    path: '/models',
    handler: ModelHandler.index
  },

  {
    method: 'GET',
    path: '/models/{model}',
    handler: ModelHandler.get
  },

  {
    method: 'PUT',
    path: '/models/{model}',
    handler: ModelHandler.update
  },

  {
    method: 'PUT',
    path: '/models/{model}/concepts',
    handler: ModelHandler.updateConcepts,
    config: {
      validate: {
        payload: {
          concepts: {
            id: Joi.string().required(),
            value: Joi.boolean()
          }
        }
      }
    }
  }
];
