import Joi from '@hapi/joi';
import Boom from '@hapi/boom';
export const thayboiSchema = Joi.object({
    _id: Joi.string(),
    information: {
        name: Joi.string().required(),
        date_of_birth: Joi.string().required(),
        picture: Joi.string().required(),
        gender: Joi.number().min(0).max(2).required(),
        degree: Joi.array().items(Joi.string()),
        skill: Joi.array().items(Joi.string()),
        introduction: Joi.string().min(100).max(1000)
    },
    contact: {
        work_address: Joi.array().items(Joi.string()),
        home_address: Joi.array().items(Joi.string()),
        media: {
            youtube: Joi.array().items(Joi.string()),
            website: Joi.array().items(Joi.string()),
            facebook: Joi.array().items(Joi.string()),
        },
        schedule: {
            open: Joi.string(),
            close: Joi.string(),
        },
        fee: Joi.array(),
        phone: Joi.array().items(Joi.string().regex(/^[0-9 +]{8,30}$/i)),
    },
    verificaton: Joi.boolean().required(),
    created_at: Joi.string().required(),
    updated_at: Joi.string().required()

});