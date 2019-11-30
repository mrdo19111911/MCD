'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var Following = new Schema({
    user: new Schema({
        _id: false,
        id_user: {
            type: Schema.Types.ObjectId
        },
        name: {
            type: String
        },
        avatar: {
            type: String
        }
    }),
    thayboi: new Schema({
        _id: false,
        id_thayboi: {
            type: Schema.Types.ObjectId
        },
        name: {
            type: String
        },
        avatar: {
            type: String
        }
    }),
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    },
    updated_at: {
        type: Date,
        required: true,
        default: Date.now
    }
});

exports.default = _mongoose2.default.model('following', Following, 'following');