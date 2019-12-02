import CommentModel from '../../models/comment.model';
import { commentSchema } from '../../schema/comment.schema';

import RateModel from '../../models/rate.model';
import { rateSchema } from '../../schema/rate.schema';

import ReactionModel from '../../models/reaction.model';
import { reactionSchema } from '../../schema/reaction.schema';

import ThayboiModel from '../../models/thayboi.model';

import ReportModel from '../../models/report.model';
import { reportSchema } from '../../schema/report.schema';

import FollowingModel from '../../models/following.model';
import { followingSchema } from '../../schema/following.schema';

import Account from '../../models/account.model';
import Joi from '@hapi/joi';
export default [
    //list-thayboi
    {
        method: "GET",
        path: "/api/v1/list/field={field}&sort={value}&page={page}",
        config: {
            auth: false
        },
        handler: async function(request, h) {
            var page = parseInt(request.params.page);
            var pageSize = 2;
            var key = `rates.${request.params.field}`;
            var value = (request.params.value == "good") ? -1 : 1;
            var total = await ThayboiModel.find().countDocuments();
            const list = await ThayboiModel.aggregate([{
                    $lookup: {
                        from: "rate",
                        localField: "_id",
                        foreignField: "id_thayboi",
                        as: "rate"
                    }

                },
                {
                    $unwind: {
                        path: "$rate",
                        preserveNullAndEmptyArrays: true,

                    }
                }, {
                    $unwind: {
                        path: "$rate.detail",
                        preserveNullAndEmptyArrays: true,

                    }
                },
                {
                    $group: {
                        _id: {
                            "_id": "$_id",
                            "information": "$information",
                        },
                        rate: { $push: "$rate.detail" },

                    },
                },

                {
                    $project: {
                        rates: {
                            "hau_dong": { "avg": { $avg: "$rate.hau_dong" }, "total": { $size: "$rate.hau_dong" } },
                            "soi_can": { "avg": { $avg: "$rate.soi_can" }, "total": { $size: "$rate.soi_can" } },
                            "tu_vi": { "avg": { $avg: "$rate.tu_vi" }, "total": { $size: "$rate.tu_vi" } },
                            "chiem_tinh": { "avg": { $avg: "$rate.chiem_tinh" }, "total": { $size: "$rate.chiem_tinh" } },
                            "que_dich": { "avg": { $avg: "$rate.que_dich" }, "total": { $size: "$rate.que_dich" } },
                            "bai_tay": { "avg": { $avg: "$rate.bai_tay" }, "total": { $size: "$rate.bai_tay" } },
                            "phong_thuy": { "avg": { $avg: "$rate.phong_thuy" }, "total": { $size: "$rate.phong_thuy" } },
                            "ngay_tot": { "avg": { $avg: "$rate.ngay_tot" }, "total": { $size: "$rate.ngay_tot" } },
                            "tam_thuc": { "avg": { $avg: "$rate.tam_thuc" }, "total": { $size: "$rate.tam_thuc" } },
                            "xem_tuong": { "avg": { $avg: "$rate.xem_tuong" }, "total": { $size: "$rate.xem_tuong" } },
                            "tam_linh": { "avg": { $avg: "$rate.tam_linh" }, "total": { $size: "$rate.tam_linh" } },
                            "cung_bai": { "avg": { $avg: "$rate.cung_bai" }, "total": { $size: "$rate.cung_bai" } },
                            "tarot": { "avg": { $avg: "$rate.tarot" }, "total": { $size: "$rate.tarot" } },
                            "total": { $size: "$rate" },

                        }
                    },

                },
                {
                    $sort: {
                        [key]: value,
                        posts: 1
                    }
                },
                { $skip: (page - 1) * pageSize }, // dữ liệu trả về ở get vá post là string nhưng trong tùy thành phần trong aggregate nhần string or number
                { $limit: pageSize },
            ]).exec();
            var data = list.map(obj => {
                var tempObj = {};
                tempObj.thayboi = obj._id;
                tempObj.rate = obj.rates;
                return tempObj
            })

            var res = {
                error: null,
                data: data,
                page: page,
                pageSize: pageSize,
                totalPage: Math.ceil(total / pageSize)
            };
            return h.response(res)
        }
    },
    // detail 
    {
        method: "GET",
        path: "/api/v1/thayboi={id}&page={page}",
        config: {
            auth: false
        },
        handler: async function(request, h) {
            var ratePerPage = 1;
            var page = parseInt(request.params.page);
            var thayboi = await ThayboiModel.findById(request.params.id);
            var totalPage = await RateModel.find({ id_thayboi: thayboi._id }).countDocuments();
            var rate = await RateModel.find({ id_thayboi: thayboi._id }).skip((page - 1) * ratePerPage).limit(ratePerPage);
            var avg = await RateModel.aggregate([{
                    $match: { id_thayboi: thayboi._id }
                },

                {
                    $unwind: {
                        path: "$detail",
                        preserveNullAndEmptyArrays: true,
                    }
                },
                {
                    $group: {

                        _id: {
                            "id_thayboi": "$id_thayboi",

                        },
                        rate: { $push: "$detail" },
                    }
                },
                {
                    $project: {

                        rates: {
                            "que_dich": { "avg": { $avg: "$rate.que_dich" }, "total": { $size: "$rate.que_dich" } },
                            "boi_bai": { "avg": { $avg: "$rate.boi_bai" }, "total": { $size: "$rate.boi_bai" } },
                            "xem_boi": { "avg": { $avg: "$rate.xem_boi" }, "total": { $size: "$rate.xem_boi" } },
                            "goi_hon": { "avg": { $avg: "$rate.goi_hon" }, "total": { $size: "$rate.goi_hon" } },
                            "chiem_tinh": { "avg": { $avg: "$rate.chiem_tinh" }, "total": { $size: "$rate.chiem_tinh" } },
                            "total": { $size: "$rate" },
                            // "rate": 1,
                        }
                    },

                },
            ]).exec()
            thayboi.set("rate", rate, { strict: false });
            for (let i = 0; i < rate.length; i++) {
                var comment = await CommentModel.find({ id_rate: rate[i]._id });
                for (let j = 0; j < comment.length; j++) {
                    var reaction = await ReactionModel.find({ id_comment: comment[j]._id }, { _id: 1, type: 1 });
                    comment[j].set('reaction', reaction, { strict: false });
                }
                var reaction = await ReactionModel.find({ id_rate: rate[i]._id }, { _id: 1, type: 1 });
                rate[i].set('comment', comment, { strict: false });
                rate[i].set('reaction', reaction, { strict: false });


            }
            thayboi.set("average", avg, { strict: false })
            var res = {
                error: null,
                data: thayboi,
                page: page,
                pageSize: ratePerPage,
                totalPage: Math.ceil(totalPage / ratePerPage),
            };

            return h.response(res).code(200);

        }

    },
    // newest rate
    {
        method: "GET",
        path: "/api/v1/rate/recent",
        handler: async function(request, h) {
            var rate = await RateModel.find({}).sort({ created_at: -1 }).limit(5);
            var res = {
                error: null,
                data: rate,
                size: 5,

            };
            return h.response(res);
        }
    },
    // search 
    {
        method: "POST",
        path: "/api/v1/search",
        options: {
            auth: false
        },
        handler: async function(request, h) {

            var result = await ThayboiModel.find({
                $or: [
                    { "information.name": { $regex: request.payload.value } },
                    { "contact.phone": { $regex: request.payload.value } }
                ]
            }, { _id: 1, "information.name": 1 }).limit(5);
            return h.response(result);
        }
    },
    //test
    {
        method: "POST",
        path: "/api/v1/test",
        config: {
            auth: false
        },
        handler: async function(request, h) {

            const result = await ThayboiModel.find({

                "information.name": { $regex: request.payload.value },


            }).limit(2)
            console.log(result);
            return h.response(result);
        }
    },


]