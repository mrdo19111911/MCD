'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _thayboi = require('../../models/thayboi.model');

var _thayboi2 = _interopRequireDefault(_thayboi);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// giới tính
// giá 
// thời gian làm việc ?? 
//địa điểm làm việc 
// tuổi 
// số năm kinh nghiệm
exports.default = [
// gioi tinh 
{
    method: "GET",
    path: "/api/v1/filter/gender={value}&page={page}",
    options: {
        auth: false
    },
    handler: async function handler(request, h) {

        var page = parseInt(request.params.page);
        var value = parseInt(request.params.value);
        return await (0, _index.filterGender)("information.gender", value, page, h);
    }
},
// tìm kiếm theo giờ làm 
{
    method: "GET",
    path: "/api/v1/filter/schedule/open={open}&close={close}&page={page}",
    handler: async function handler(request, h) {

        var open = parseInt(request.params.open);
        var close = parseInt(request.params.close);
        var page = parseInt(request.params.page);
        return await (0, _index.filterSchedule)(open, close, page, h);
    },
    options: {
        auth: false
    }
},
// tìm kiếm theo địa điểm 
{
    method: "GET",
    path: "/api/v1/filter/location/ward={ward?}&district={district?}&province={province?}&region={region?}$page={page}",
    handler: async function handler(request, h) {
        var ward = request.params.ward;
        var district = request.params.district;
        var province = request.params.province;
        var region = request.params.region;
        var page = parseInt(request.params.page);
        return (0, _index.filterLocation)({ ward: ward, district: district, province: province, region: region }, page, h);
        // console.log(ward);
        // var data = await ThayboiModel.find({
        //     $or: [
        //         { "contact.work_address.raw.ward": ward },
        //         { "contact.work_address.raw.district": district },
        //         { "contact.work_address.raw.province": province },
        //         { "contact.work_address.raw.region": region },
        //     ]

        // })
        // return h.response(data)
    },
    options: {
        auth: false
    }
},
// tìm kiếm theo giá 
{
    method: "GET",
    path: "/api/v1/filter/fee/skill={skill}&min={min}&max={max}&page={page}",
    handler: async function handler(request, h) {
        var skill = request.params.skill;
        var field = 'contact.fee.' + skill;
        var min = parseInt(request.params.min);
        var max = parseInt(request.params.max);
        var page = parseInt(request.params.page);
        return await (0, _index.filterThayBoi)(field, min, max, page, h);
    },
    options: {
        auth: false
    }

},
// tìm kiếm theo tuổi 
{
    method: "GET",
    path: "/api/v1/filter/age/min={min}&max={max}&page={page}",
    config: {
        auth: false
    },
    handler: async function handler(request, h) {
        var min = parseInt(request.params.min);
        var max = parseInt(request.params.max);
        var page = parseInt(request.params.page);
        var field = "information.age";
        return await (0, _index.filterThayBoi)(field, min, max, page, h);
    }
}];