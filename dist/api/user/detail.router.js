'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _rate = require('../../models/rate.model');

var _rate2 = _interopRequireDefault(_rate);

var _thayboi = require('../../models/thayboi.model');

var _thayboi2 = _interopRequireDefault(_thayboi);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [
//
{
    method: "GET",
    path: "/api/v1/getcomment/id={id}&page={page}",
    options: {
        auth: false
    },
    handler: async function handler(request, h) {
        var page = parseInt(request.params.page);
        var pageSize = 2;
        var total = await _rate2.default.find({ id_thayboi: request.params.id }).countDocuments();
        var rate = await _rate2.default.aggregate([{
            $match: { id_thayboi: _mongoose2.default.Types.ObjectId(request.params.id) }
        }, {
            $lookup: {
                from: "comment",
                localField: "_id",
                foreignField: "id_rate",
                as: "comments"
            }
        }, { $skip: (page - 1) * pageSize }, // dữ liệu trả về ở get vá post là string nhưng trong tùy thành phần trong aggregate nhần string or number
        { $limit: pageSize }]).exec();
        var res = {
            error: null,
            data: rate,
            page: parseInt(request.params.page),
            toltalPage: Math.ceil(total / pageSize)
        };
        return h.response(res);
    }

}, {
    method: "GET",
    path: "/api/v1/averagerate/id={id}",
    options: {
        auth: false
    },
    handler: async function handler(request, h) {
        // {
        //     $match: { id_thayboi: mongoose.Types.ObjectId(request.params.id) }
        // },
        var list = await _thayboi2.default.aggregate([{
            $match: { _id: _mongoose2.default.Types.ObjectId(request.params.id) }
        }, {
            $lookup: {
                from: "rate",
                localField: "_id",
                foreignField: "id_thayboi",
                as: "rate"
            }

        }, {
            $unwind: {
                path: "$rate",
                preserveNullAndEmptyArrays: true

            }
        }, {
            $unwind: {
                path: "$rate.detail",
                preserveNullAndEmptyArrays: true

            }
        }, {
            $group: {
                _id: {
                    "_id": "$_id",
                    "information": "$information"
                },
                rate: { $push: "$rate.detail" }

            }
        }, {
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
                    "total": { $size: "$rate" }

                }
            }

        }]).exec();
        return h.response(list);
    }
}];