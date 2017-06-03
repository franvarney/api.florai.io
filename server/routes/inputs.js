const Joi = require('joi');

const InputHandler = require('../handlers/inputs');

module.exports = [
  {
    method: 'POST',
    path: '/inputs',
    handler: InputHandler.create,
    config: {
      validate: {
        payload: {
          url: Joi.string().uri().required(),
          concepts: Joi.array()
        }
      }
    }
  },
  {
    method: 'GET',
    path: '/inputs/{concept}',
    handler: InputHandler.get
  }
];
