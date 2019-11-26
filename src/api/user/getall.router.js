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

            var value = (request.params.value == "good") ? -1 : 1;
            var total = await ThayboiModel.find().countDocuments();
            const list = await ThayboiModel.aggregate([

                // {$match :  {_id: mongoose.Types.ObjectId("5dc7084f926e8f4a640e9a90")}}
                {
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
                },
                {
                    $group: {
                        _id: {
                            "_id": "$_id",
                            "name": "$name",
                            "address": "$address",
                            "gender": "$gender",
                            "avatar": "$avatar",
                            "skill": "$skill",

                        },

                        rate: { $push: "$rate", },


                    },


                },

                {
                    $project: {
                        "rate._id": 1,
                        "rate.star": 1,
                        "avgStar": { $avg: "$rate.star" },
                        "total": { $size: "$rate" },
                    },

                },
                {
                    $sort: {
                        [request.params.field]: value,
                        posts: 1
                    }
                },
                { $skip: (parseInt(request.params.page) - 1) * 2 }, // dữ liệu trả về ở get vá post là string nhưng trong tùy thành phần trong aggregate nhần string or number
                { $limit: 2 },
            ]).exec();
            var data = list.map(obj => {
                var tempObj = {};
                tempObj.thayboi = obj._id;
                tempObj.rate = obj.rate;
                tempObj.avgStar = obj.avgStar;
                tempObj.total = obj.total;
                return tempObj
            })

            var res = {
                error: null,
                data: data,
                page: parseInt(request.params.page),
                pageSize: 2,
                totalPage: Math.ceil(total / 2)
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
            var number = 1;
            var page = parseInt(request.params.page);

            var thayboi = await ThayboiModel.findById(request.params.id);
            var rate = await RateModel.find({ id_thayboi: thayboi._id }).skip((page - 1) * number).limit(number);
            // var result = await FollowingModel.find({ "thayboi.id_thayboi": request.payload.value }, { _id: 1 }).countDocuments();
            var avgStar = await RateModel.aggregate([{
                    $match: { id_thayboi: thayboi._id }
                },
                {
                    $group: {
                        _id: {
                            "id_thayboi": "$id_thayboi"
                        },
                        totalPage: { $sum: 1 },

                        star: { $push: "$star" },
                    }
                },
                {
                    $project: {
                        _id: 0,
                        totalPage: 1,

                        "avgStar": { $avg: "$star" },

                    }
                }
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
            thayboi.set("avgStar", avgStar[0].avgStar, { strict: false })
            var res = {
                error: null,
                data: thayboi,
                page: page,
                pageSize: number,
                totalPage: avgStar[0].totalPage
            };

            return h.response(res);

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
        handler: async function(request, h) {

            var result = await ThayboiModel.find({
                $or: [
                    { name: { $regex: request.payload.value } },
                    { phone: { $regex: request.payload.value } }
                ]
            }, { _id: 1, name: 1 }).limit(5);
            return h.response(result);
        }
    },
    // //test
    // {
    //     method: "POST",
    //     path: "/api/v1/test",
    //     config: {
    //         auth: false
    //     },
    //     handler: async function(request, h) {

    //         const user = await Account.findOne({ 'local.email': request.payload.email });
    //         console.log(user);
    //         return h.response(user);
    //     }
    // },


]