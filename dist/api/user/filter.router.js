"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _thayboi = require("../../models/thayboi.model");

var _thayboi2 = _interopRequireDefault(_thayboi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [
// gioi tinh 
{
    method: "GET",
    path: "/api/v1/filter/gender={value}",
    options: {
        auth: false
    },
    handler: async function handler(request, h) {
        var data = await _thayboi2.default.find({ "information.gender": parseInt(request.params.value) });
        return h.response(data);
    }
}]; // giới tính
// giá 
// thời gian làm việc ?? 
//địa điểm làm việc 
// tuổi 
// số năm kinh nghiệm