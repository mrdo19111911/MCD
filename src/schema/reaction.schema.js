import Joi from '@hapi/joi';

export const reactionSchema = Joi.object({
    _id: Joi.string(),
    user: {
        id_user: Joi.string().required(), // cần kiểm tra lại
        name: Joi.string().required(),
        avatar: Joi.string()
    },
    type: Joi.number().min(1).max(3).required(),
    id_rate: Joi.string(),
    id_comment: Joi.string(),
    created_at: Joi.string().required(),
    updated_at: Joi.string().required()

}).without('id_rate', 'id_comment');