'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.filterThayBoi = filterThayBoi;
exports.filterSchedule = filterSchedule;
exports.filterGender = filterGender;
exports.filterLocation = filterLocation;

var _comment = require('../../models/comment.model');

var _comment2 = _interopRequireDefault(_comment);

var _comment3 = require('../../schema/comment.schema');

var _rate = require('../../models/rate.model');

var _rate2 = _interopRequireDefault(_rate);

var _rate3 = require('../../schema/rate.schema');

var _reaction = require('../../models/reaction.model');

var _reaction2 = _interopRequireDefault(_reaction);

var _reaction3 = require('../../schema/reaction.schema');

var _thayboi = require('../../models/thayboi.model');

var _thayboi2 = _interopRequireDefault(_thayboi);

var _report = require('../../models/report.model');

var _report2 = _interopRequireDefault(_report);

var _report3 = require('../../schema/report.schema');

var _following = require('../../models/following.model');

var _following2 = _interopRequireDefault(_following);

var _following3 = require('../../schema/following.schema');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

async function filterThayBoi(field, min, max, page, h) {
    var pageSize = 2;

    var total = await _thayboi2.default.find(_defineProperty({}, field, { $exists: true })).count();
    var list = await _thayboi2.default.aggregate([{
        $match: _defineProperty({}, field, { $gte: min, $lte: max })

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
                "information": "$information",
                "contact": "$contact"
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

    }, { $skip: (page - 1) * pageSize }, // dữ liệu trả về ở get vá post là string nhưng trong tùy thành phần trong aggregate nhần string or number
    { $limit: pageSize }]).exec();
    var data = list.map(function (obj) {
        var tempObj = {};
        tempObj.thayboi = obj._id;
        tempObj.rate = obj.rates;
        return tempObj;
    });

    var res = {
        error: null,
        data: data,
        page: page,
        pageSize: pageSize,
        totalPage: Math.ceil(total / pageSize)
    };
    return h.response(res);
}

async function filterSchedule(open, close, page, h) {
    var pageSize = 2;

    var total = await _thayboi2.default.find({
        $and: [{ "contact.schedule.open": { $gte: open } }, { "contact.schedule.close": { $lte: close } }]
    }).count();
    console.log(total);
    var list = await _thayboi2.default.aggregate([{
        $match: {
            $and: [{ "contact.schedule.open": { $gte: open } }, { "contact.schedule.close": { $lte: close } }]
        }

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
                "information": "$information",
                "contact": "$contact"
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

    }, { $skip: (page - 1) * pageSize }, // dữ liệu trả về ở get vá post là string nhưng trong tùy thành phần trong aggregate nhần string or number
    { $limit: pageSize }]).exec();
    var data = list.map(function (obj) {
        var tempObj = {};
        tempObj.thayboi = obj._id;
        tempObj.rate = obj.rates;
        return tempObj;
    });

    var res = {
        error: null,
        data: data,
        page: page,
        pageSize: pageSize,
        totalPage: Math.ceil(total / pageSize)
    };
    return h.response(res);
}

async function filterGender(field, value, page, h) {
    var pageSize = 2;

    var total = await _thayboi2.default.find(_defineProperty({}, field, value)).count();
    var list = await _thayboi2.default.aggregate([{
        $match: _defineProperty({}, field, value)

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
                "information": "$information",
                "contact": "$contact"
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

    }, { $skip: (page - 1) * pageSize }, // dữ liệu trả về ở get vá post là string nhưng trong tùy thành phần trong aggregate nhần string or number
    { $limit: pageSize }]).exec();
    var data = list.map(function (obj) {
        var tempObj = {};
        tempObj.thayboi = obj._id;
        tempObj.rate = obj.rates;
        return tempObj;
    });

    var res = {
        error: null,
        data: data,
        page: page,
        pageSize: pageSize,
        totalPage: Math.ceil(total / pageSize)
    };
    return h.response(res);
}

async function filterLocation(value, page, h) {
    var pageSize = 2;

    var total = await _thayboi2.default.find({
        $or: [{ "contact.work_address.raw.ward": value.ward }, { "contact.work_address.raw.district": value.district }, { "contact.work_address.raw.province": value.province }, { "contact.work_address.raw.region": value.region }]
    }).count();
    var list = await _thayboi2.default.aggregate([{
        $match: {
            $or: [{ "contact.work_address.raw.ward": value.ward }, { "contact.work_address.raw.district": value.district }, { "contact.work_address.raw.province": value.province }, { "contact.work_address.raw.region": value.region }]
        }

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
                "information": "$information",
                "contact": "$contact"
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

    }, { $skip: (page - 1) * pageSize }, // dữ liệu trả về ở get vá post là string nhưng trong tùy thành phần trong aggregate nhần string or number
    { $limit: pageSize }]).exec();
    var data = list.map(function (obj) {
        var tempObj = {};
        tempObj.thayboi = obj._id;
        tempObj.rate = obj.rates;
        return tempObj;
    });

    var res = {
        error: null,
        data: data,
        page: page,
        pageSize: pageSize,
        totalPage: Math.ceil(total / pageSize)
    };
    return h.response(res);
}