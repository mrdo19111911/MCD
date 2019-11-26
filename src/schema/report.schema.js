import Joi from '@hapi/joi';

export const reportSchema = Joi.object({
    _id: Joi.string(),
    user: {
        id_user: Joi.string().required(), // cần kiểm tra lại
        name: Joi.string().required(),
        avatar: Joi.string()
    },
    content: Joi.string().required(),
    thayboi: {
        id_thayboi: Joi.string().required(),
        name: Joi.string().required()
    },
    created_at: Joi.string().required(),
    updated_at: Joi.string().required()
});