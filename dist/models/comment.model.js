'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var Comment = new Schema({
    // id: {
    //     type: Schema.Types.ObjectId
    // },
    user: {
        id_user: {
            type: String
        },
        name: {
            type: String
        },
        picture: {
            type: String
        }
    },
    content: {
        type: String,
        required: true
    },
    id_rate: {
        type: Schema.Types.ObjectId
    },
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

exports.default = _mongoose2.default.model('comment', Comment, 'comment');