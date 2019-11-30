import Joi from '@hapi/joi';

export const rateSchema = Joi.object({
    _id: Joi.string(),
    user: {
        id_user: Joi.string().required(), // cần kiểm tra lại
        name: Joi.string().required(),
        picture: Joi.string()
    },
    content: Joi.string().required(),
    star: Joi.number().min(1).max(5).required(),
    id_thayboi: Joi.string().required(),
    created_at: Joi.string().required(),
    updated_at: Joi.string().required()
});