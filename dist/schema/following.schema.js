'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.followingSchema = undefined;

var _joi = require('@hapi/joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var followingSchema = exports.followingSchema = _joi2.default.object({
    user: {

        id_user: _joi2.default.string().required(),
        name: _joi2.default.string().required(),
        avatar: _joi2.default.string()
    },
    thayboi: {
        id_thayboi: _joi2.default.string().required(),
        name: _joi2.default.string().required(),
        avatar: _joi2.default.string()
    },
    created_at: _joi2.default.string().required(),
    updated_at: _joi2.default.string().required()
});