import Joi from '@hapi/joi';
export const commentSchema = Joi.object({
    _id: Joi.string(),
    user: {
        id_user: Joi.string().required(), // cần kiểm tra lại
        name: Joi.string().required(),
        picture: Joi.string()
    },
    content: Joi.string().max(500).required(),
    id_rate: Joi.string().required(),
    created_at: Joi.string().required(),
    updated_at: Joi.string().required()
});