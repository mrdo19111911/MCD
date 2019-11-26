import ReactionModel from '../../models/reaction.model';
import { reactionSchema } from '../../schema/reaction.schema';
import Joi from '@hapi/joi';
export default [
    // reaction-add
    {
        method: "POST",
        path: "/api/v1/reaction/add",
        handler: async function(request, h) {

            try {
                var reaction = new ReactionModel(request.payload);
                var result = await reaction.save();
                return h.response(result);
            } catch (error) {
                return h.response(error).code(500);
            }
        },
        options: {
            validate: {
                payload: reactionSchema,

                failAction: function(request, h, err) {
                    console.log(err)
                    return err
                }
            },
        }

    },
    //reaction-edit
    {
        method: "POST",
        path: "/api/v1/reaction/edit",
        handler: async function(request, h) {
            var rate = await ReactionModel.findByIdAndUpdate({ _id: request.payload._id }, request.payload)
            return h.response(rate);
        },
        options: {
            validate: {
                payload: reactionSchema,

                failAction: function(request, h, err) {
                    console.log(err)
                    return err
                }
            },
        }

    },
    //reaction-del
    {
        method: "POST",
        path: "/api/v1/reaction/del",
        handler: async function(request, h) {
            try {
                const res = await ReactionModel.deleteOne({ _id: request.payload._id })
                return h.response(res.deletedCount)
            } catch (error) {
                return h.response(error).code(500)
            }
        },
        options: {
            validate: {
                payload: Joi.object({
                    _id: Joi.string().required()
                }),
                failAction: function(request, h, err) {
                    console.log(err)
                    return err
                }
            },
        }

    },
]