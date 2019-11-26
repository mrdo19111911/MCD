import RateModel from '../../models/rate.model';
import { rateSchema } from '../../schema/rate.schema';
import Joi from '@hapi/joi';
export default [
    //rate-add
    {
        method: "POST",
        path: "/api/v1/rate/add",
        handler: async function(request, h) {
            try {
                var rate = new RateModel(request.payload);
                var result = await rate.save();
                return h.response(result)
            } catch (error) {
                return h.response(error).code(500)
            }
        },
        options: {
            validate: {
                payload: rateSchema,

                failAction: function(request, h, err) {
                    console.log(err)
                    return err
                }
            },
        }

    },
    // rate - edit
    {
        method: "POST",
        path: "/api/v1/rate/edit",
        handler: async function(request, h) {
            var rate = await RateModel.findByIdAndUpdate({ _id: request.payload._id }, request.payload)
            return h.response(rate);
        },
        options: {
            validate: {
                payload: rateSchema,

                failAction: function(request, h, err) {
                    console.log(err)
                    return err
                }
            },
        }

    },
    // rate - delete
    {
        method: "POST",
        path: "/api/v1/rate/del",
        handler: async function(request, h) {
            try {
                const res = await RateModel.deleteOne({ _id: request.payload._id })
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