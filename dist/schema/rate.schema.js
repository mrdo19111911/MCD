'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rateSchema = undefined;

var _joi = require('@hapi/joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rateSchema = exports.rateSchema = _joi2.default.object({
    _id: _joi2.default.string(),
    user: {
        id_user: _joi2.default.string().required(), // cần kiểm tra lại
        name: _joi2.default.string().required(),
        picture: _joi2.default.string()
    },
    content: _joi2.default.string().required(),
    star: _joi2.default.number().min(1).max(5).required(),
    id_thayboi: _joi2.default.string().required(),
    created_at: _joi2.default.string().required(),
    updated_at: _joi2.default.string().required()
});