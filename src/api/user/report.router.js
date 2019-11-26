import ReportModel from '../../models/report.model';
import { reportSchema } from '../../schema/report.schema';
import Joi from '@hapi/joi';
export default [{
        method: "POST",
        path: "/api/v1/report/add",
        handler: async function(request, h) {

            try {
                var report = new ReportModel(request.payload);
                var result = await report.save();
                return h.response(result)
            } catch (error) {
                return h.response(error).code(500)
            }
        },
        options: {
            validate: {
                payload: reportSchema,

                failAction: function(request, h, err) {
                    console.log(err)
                    return err
                }
            },
        }

    },
    // report - edit
    {
        method: "POST",
        path: "/api/v1/report/edit",
        handler: async function(request, h) {
            var report = await ReportModel.findByIdAndUpdate({ _id: request.payload._id }, request.payload)
            return h.response(report);
        },
        options: {
            validate: {
                payload: reportSchema,

                failAction: function(request, h, err) {
                    console.log(err)
                    return err
                }
            },
        }

    },
    // report - delete
    {
        method: "POST",
        path: "/api/v1/report/del",
        handler: async function(request, h) {
            try {
                const res = await ReportModel.deleteOne({ _id: request.payload._id })
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