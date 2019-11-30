'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.thayboiSchema = undefined;

var _joi = require('@hapi/joi');

var _joi2 = _interopRequireDefault(_joi);

var _boom = require('@hapi/boom');

var _boom2 = _interopRequireDefault(_boom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var thayboiSchema = exports.thayboiSchema = _joi2.default.object({
    _id: _joi2.default.string(),
    information: {
        name: _joi2.default.string().required(),
        date_of_birth: _joi2.default.string().required(),
        picture: _joi2.default.string().required(),
        gender: _joi2.default.number().min(0).max(2).required(),
        degree: _joi2.default.array().items(_joi2.default.string()),
        skill: _joi2.default.array().items(_joi2.default.string()),
        introduction: _joi2.default.string().min(100).max(1000)
    },
    contact: {
        work_address: _joi2.default.array().items(_joi2.default.string()),
        home_address: _joi2.default.array().items(_joi2.default.string()),
        media: {
            youtube: _joi2.default.array().items(_joi2.default.string()),
            website: _joi2.default.array().items(_joi2.default.string()),
            facebook: _joi2.default.array().items(_joi2.default.string())
        },
        schedule: {
            open: _joi2.default.string(),
            close: _joi2.default.string()
        },
        fee: _joi2.default.array(),
        phone: _joi2.default.array().items(_joi2.default.string().regex(/^[0-9 +]{8,30}$/i))
    },
    verificaton: _joi2.default.boolean().required(),
    created_at: _joi2.default.string().required(),
    updated_at: _joi2.default.string().required()

});