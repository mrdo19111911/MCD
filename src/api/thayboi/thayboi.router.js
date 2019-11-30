import ThayBoiModel from '../../models/thayboi.model';
import { thayboiSchema } from '../../schema/thayboi.schema';
import Joi from '@hapi/joi';
export default [
    //thayboi-add
    {
        method: 'POST',
        path: '/api/v1/thayboi/add',

        handler: async function(request, h) {
            try {

                var thayboi = new ThayBoiModel(request.payload);
                var result = await thayboi.save();
                return h.response(result)
            } catch (error) {
                return h.response(error).code(500)
            }
        },
        options: {
            auth: false,
            validate: {
                //payload: thayboiSchema,

                failAction: function(request, h, err) {
                    console.log(err)
                    return err
                }
            },

        },

    },
    //thayboi-edit
    {
        method: 'POST',
        path: '/api/v1/thayboi/edit',

        handler: async function(request, h) {
            var person = await ThayBoiModel.findByIdAndUpdate({ _id: request.payload._id }, request.payload)
            return h.response(person);
        },
        options: {
            auth: false,
            validate: {
                //payload: thayboiSchema,

                failAction: function(request, h, err) {
                    console.log(err)
                    return err
                }
            },

        },

    },
    // thayboi-del
    {
        method: "POST",
        path: "/api/v1/thayboi/del",
        handler: async function(request, h) {
            try {
                const res = await ThayBoiModel.deleteOne({ _id: request.payload._id })
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