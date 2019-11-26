import Joi from '@hapi/joi';
export const followingSchema = Joi.object({
    user: {

        id_user: Joi.string().required(),
        name: Joi.string().required(),
        avatar: Joi.string(),
    },
    thayboi: {
        id_thayboi: Joi.string().required(),
        name: Joi.string().required(),
        avatar: Joi.string(),
    },
    created_at: Joi.string().required(),
    updated_at: Joi.string().required()
})