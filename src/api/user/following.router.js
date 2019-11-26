import FollowingModel from '../../models/following.model';
import { followingSchema } from '../../schema/following.schema';

import Joi from '@hapi/joi';

export default [
    //following 
    {
        method: "POST",
        path: "/api/v1/following",
        handler: async function(request, h) {
            try {
                var following = new FollowingModel(request.payload);
                var result = await following.save();
                return h.response(result)
            } catch (error) {
                return h.response(error).code(500)
            }
        },
        options: {
            validate: {
                payload: followingSchema,

                failAction: function(request, h, err) {
                    console.log(err)
                    return err
                }
            },
        },


    },
    //unfollowing 
    {
        method: "POST",
        path: "/api/v1/unfollowing",
        handler: async function(request, h) {
            try {
                var result = await FollowingModel.deleteOne({ _id: request.payload._id });
                return h.response(result.deletedCount)
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