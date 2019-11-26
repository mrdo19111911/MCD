import CommentModel from '../../models/comment.model';
import { commentSchema } from '../../schema/comment.schema';
import Joi from '@hapi/joi';
export default [
    // comment-add
    {
        method: "POST",
        path: "/api/v1/comment/add",
        handler: async function(request, h) {

            try {
                var comment = new CommentModel(request.payload);
                var result = await comment.save();
                return h.response(result);
            } catch (error) {
                return h.response(error).code(500);
            }
        },
        options: {
            validate: {
                payload: commentSchema,

                failAction: function(request, h, err) {
                    console.log(err)
                    return err
                }
            },
        }

    },
    // comment-edit
    {
        method: "POST",
        path: "/api/v1/comment/edit",
        handler: async function(request, h) {
            var comment = await CommentModel.findByIdAndUpdate({ _id: request.payload._id }, request.payload)
            return h.response(comment);
        },
        options: {
            validate: {
                payload: commentSchema,

                failAction: function(request, h, err) {
                    console.log(err)
                    return err
                }
            },
        }

    },
    //comment-delete
    {
        method: "POST",
        path: "/api/v1/comment/del",
        handler: async function(request, h) {
            try {
                const res = await CommentModel.deleteOne({ _id: request.payload._id })
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