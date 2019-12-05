import ThayboiModel from '../../models/thayboi.model';
export async function filterThayBoi(field, min, max, page, h) {
    var pageSize = 2;

    var total = await ThayboiModel.find({
        [field]: { $exists: true }
    }).count();
    const list = await ThayboiModel.aggregate([{
            $match: {
                [field]: { $gte: min, $lte: max }
            }

        },
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
                    "contact": "$contact"
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


export async function filterSchedule(open, close, page, h) {
    var pageSize = 2;

    var total = await ThayboiModel.find({
        $and: [
            { "contact.schedule.open": { $gte: open } },
            { "contact.schedule.close": { $lte: close } },

        ]
    }).count();
    console.log(total);
    const list = await ThayboiModel.aggregate([{
            $match: {
                $and: [
                    { "contact.schedule.open": { $gte: open } },
                    { "contact.schedule.close": { $lte: close } },

                ]
            }

        },
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
                    "contact": "$contact"
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

export async function filterGender(field, value, page, h) {
    var pageSize = 2;

    var total = await ThayboiModel.find({
        [field]: value
    }).count();
    const list = await ThayboiModel.aggregate([{
            $match: {
                [field]: value
            }

        },
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
                    "contact": "$contact"
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


export async function filterLocation(value, page, h) {
    var pageSize = 2;

    var total = await ThayboiModel.find({
        $or: [
            { "contact.work_address.raw.ward": value.ward },
            { "contact.work_address.raw.district": value.district },
            { "contact.work_address.raw.province": value.province },
            { "contact.work_address.raw.region": value.region },
        ]
    }).count();
    const list = await ThayboiModel.aggregate([{
            $match: {
                $or: [
                    { "contact.work_address.raw.ward": value.ward },
                    { "contact.work_address.raw.district": value.district },
                    { "contact.work_address.raw.province": value.province },
                    { "contact.work_address.raw.region": value.region },
                ]
            }

        },
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
                    "contact": "$contact"
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