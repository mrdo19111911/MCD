'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _account = require('../../models/account.model');

var _account2 = _interopRequireDefault(_account);

var _joi = require('@hapi/joi');

var _joi2 = _interopRequireDefault(_joi);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var distance = require('google-distance-matrix');

distance.key('AIzaSyDR6CP1k0cBxaN6u2CthozxPZV0sbi3ewA');
distance.units('metric');

var Promise = require('promise');

exports.default = [
//list-thayboi
{
    method: "GET",
    path: "/api/v1/list/field={field}&sort={value}&page={page}",
    config: {
        auth: false
    },
    handler: async function handler(request, h) {
        var _$sort;

        var page = parseInt(request.params.page);
        var pageSize = 2;
        var key = 'rates.' + request.params.field;
        var value = request.params.value == "good" ? -1 : 1;
        var total = await _thayboi2.default.find().countDocuments();
        var list = await _thayboi2.default.aggregate([{
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

        }, {
            $sort: (_$sort = {}, _defineProperty(_$sort, key, value), _defineProperty(_$sort, 'posts', 1), _$sort)
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
},
// detail 
{
    method: "GET",
    path: "/api/v1/thayboi={id}&page={page}",
    config: {
        auth: false
    },
    handler: async function handler(request, h) {
        var ratePerPage = 1;
        var page = parseInt(request.params.page);
        var thayboi = await _thayboi2.default.findById(request.params.id);
        var totalPage = await _rate2.default.find({ id_thayboi: thayboi._id }).countDocuments();
        var rate = await _rate2.default.find({ id_thayboi: thayboi._id }).skip((page - 1) * ratePerPage).limit(ratePerPage);
        var avg = await _rate2.default.aggregate([{
            $match: { id_thayboi: thayboi._id }
        }, {
            $unwind: {
                path: "$detail",
                preserveNullAndEmptyArrays: true
            }
        }, {
            $group: {

                _id: {
                    "id_thayboi": "$id_thayboi"

                },
                rate: { $push: "$detail" }
            }
        }, {
            $project: {

                rates: [{ "hau_dong": { "avg": { $avg: "$rate.hau_dong" }, "total": { $size: "$rate.hau_dong" } } }, { "soi_can": { "avg": { $avg: "$rate.soi_can" }, "total": { $size: "$rate.soi_can" } } }, { "tu_vi": { "avg": { $avg: "$rate.tu_vi" }, "total": { $size: "$rate.tu_vi" } } }, { "chiem_tinh": { "avg": { $avg: "$rate.chiem_tinh" }, "total": { $size: "$rate.chiem_tinh" } } }, { "que_dich": { "avg": { $avg: "$rate.que_dich" }, "total": { $size: "$rate.que_dich" } } }, { "bai_tay": { "avg": { $avg: "$rate.bai_tay" }, "total": { $size: "$rate.bai_tay" } } }, { "phong_thuy": { "avg": { $avg: "$rate.phong_thuy" }, "total": { $size: "$rate.phong_thuy" } } }, { "ngay_tot": { "avg": { $avg: "$rate.ngay_tot" }, "total": { $size: "$rate.ngay_tot" } } }, { "tam_thuc": { "avg": { $avg: "$rate.tam_thuc" }, "total": { $size: "$rate.tam_thuc" } } }, { "xem_tuong": { "avg": { $avg: "$rate.xem_tuong" }, "total": { $size: "$rate.xem_tuong" } } }, { "tam_linh": { "avg": { $avg: "$rate.tam_linh" }, "total": { $size: "$rate.tam_linh" } } }, { "cung_bai": { "avg": { $avg: "$rate.cung_bai" }, "total": { $size: "$rate.cung_bai" } } }, { "tarot": { "avg": { $avg: "$rate.tarot" }, "total": { $size: "$rate.tarot" } } }, { "total": { $size: "$rate" } }]
            }

        }]).exec();
        thayboi.set("rate", rate, { strict: false });

        for (var i = 0; i < rate.length; i++) {
            var comment = await _comment2.default.find({ id_rate: rate[i]._id });
            for (var j = 0; j < comment.length; j++) {
                var reaction = await _reaction2.default.find({ id_comment: comment[j]._id }, { _id: 1, type: 1 });
                comment[j].set('reaction', reaction, { strict: false });
            }
            var reaction = await _reaction2.default.find({ id_rate: rate[i]._id }, { _id: 1, type: 1 });
            rate[i].set('comment', comment, { strict: false });
            rate[i].set('reaction', reaction, { strict: false });
        }
        thayboi.set("average", avg, { strict: false });
        var res = {
            error: null,
            data: thayboi,
            page: page,
            pageSize: ratePerPage,
            totalPage: Math.ceil(totalPage / ratePerPage)
        };

        return h.response(res).code(200);
    }

},
// newest rate
{
    method: "GET",
    path: "/api/v1/rate/recent",
    handler: async function handler(request, h) {
        var rate = await _rate2.default.find({}).sort({ created_at: -1 }).limit(5);
        var res = {
            error: null,
            data: rate,
            size: 5

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
    handler: async function handler(request, h) {

        var result = await _thayboi2.default.find({
            $or: [{ "information.name": { $regex: request.payload.value } }, { "contact.phone": { $regex: request.payload.value } }]
        }, { _id: 1, "information.name": 1 }).limit(5);
        return h.response(result);
    }
},
//test
{
    method: "GET",
    path: "/api/v1/test/origin={origin}&distance={distance}",
    config: {
        auth: false
    },
    handler: async function handler(request, h) {
        var origins = [];
        origins.push(request.params.origin);
        var destinations = [];
        var khoang_cach = parseInt(request.params.distance);
        var thayboi = await _thayboi2.default.find({}, { "_id": 1, "contact.work_address.raw.ggmap": 1 });
        thayboi.map(function (val) {
            val.contact.work_address.map(function (valRaw) {
                return destinations.push(valRaw.raw.ggmap);
            });
        });
        var data = await getMetrixDist(origins, destinations, khoang_cach);
        data.map(function (val) {
            return val._id = thayboi[val._id]._id;
        });
        var res = {
            error: null,
            data: data
        };
        return h.response(res);
    }
}];


function getMetrixDist(origins, destinations, khoang_cach) {
    return new Promise(function (resolve, reject) {
        var data = [];
        distance.matrix(origins, destinations, function (err, distances) {
            if (err) {
                console.log(err);
                reject(err);
            }
            if (!distances) {
                console.log('no distances');
                reject('no distances');
            }
            if (distances.status == 'OK') {

                for (var i = 0; i < origins.length; i++) {
                    for (var j = 0; j < destinations.length; j++) {
                        var origin = distances.origin_addresses[i];
                        var destination = distances.destination_addresses[j];
                        if (distances.rows[0].elements[j].status == 'OK') {
                            var distance = distances.rows[i].elements[j].distance.text;
                            //console.log('Distance from ' + origin + ' to ' + destination + ' is ' + distance);                   
                            if (parseInt(distance.replace(",", "")) < khoang_cach) {
                                data.push({
                                    _id: j,
                                    longLat: destinations[j],
                                    origin: origin,
                                    destinations: destination,
                                    distance: distance
                                });
                            }
                        } else {
                            console.log(destination + ' is not reachable by land from ' + origin);
                        }
                    }
                }
                resolve(data);
            } else {
                reject('clgt');
            }
        });
    });
}