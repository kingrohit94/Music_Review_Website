const Joi = require('joi');

//validation config
module.exports = function() {
  Joi.objectId = require('joi-objectid')(Joi);
}