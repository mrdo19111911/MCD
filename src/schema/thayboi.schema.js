import Joi from '@hapi/joi';
import Boom from '@hapi/boom';
export const thayboiSchema = Joi.object({
    _id: Joi.string(),
    name: Joi.string().min(5).max(50).required(),
    date_of_birth: Joi.string().min(5).max(15),
    address: Joi.array().items(Joi.string()),
    phone: Joi.string().regex(/^[0-9 +]{8,30}$/i),
    gender: Joi.number().min(0).max(2),
    avatar: Joi.string(),
    skill: Joi.string(),
    exp: Joi.string(),
    degree: Joi.string(),
    media: {
        youtube: Joi.string(),
        website: Joi.string()
    },
    verificaton: Joi.boolean().required(),
    created_at: Joi.string().required(),
    updated_at: Joi.string().required()

});