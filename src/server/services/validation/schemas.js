const Joi = require("joi");

const day = (day) => {
  return Joi.object({
    activities: Joi.array().items(
      Joi.object({
        text: Joi.string(),
        emoji: Joi.string(),
      })
    ),
  }).validate(day);
};

module.exports = { day };
