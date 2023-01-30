import Joi from 'joi';

export const ticketJOI = Joi.object({

  ticketTypeId: Joi.number().integer().required(),
  
});