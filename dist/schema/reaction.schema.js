'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reactionSchema = undefined;

var _joi = require('@hapi/joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reactionSchema = exports.reactionSchema = _joi2.default.object({
    _id: _joi2.default.string(),
    user: {
        id_user: _joi2.default.string().required(), // cần kiểm tra lại
        name: _joi2.default.string().required(),
        avatar: _joi2.default.string()
    },
    type: _joi2.default.number().min(1).max(3).required(),
    id_rate: _joi2.default.string(),
    id_comment: _joi2.default.string(),
    created_at: _joi2.default.string().required(),
    updated_at: _joi2.default.string().required()

}).without('id_rate', 'id_comment');