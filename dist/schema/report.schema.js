'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reportSchema = undefined;

var _joi = require('@hapi/joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reportSchema = exports.reportSchema = _joi2.default.object({
    _id: _joi2.default.string(),
    user: {
        id_user: _joi2.default.string().required(), // cần kiểm tra lại
        name: _joi2.default.string().required(),
        avatar: _joi2.default.string()
    },
    content: _joi2.default.string().required(),
    thayboi: {
        id_thayboi: _joi2.default.string().required(),
        name: _joi2.default.string().required()
    },
    created_at: _joi2.default.string().required(),
    updated_at: _joi2.default.string().required()
});