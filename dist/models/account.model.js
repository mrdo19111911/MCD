'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var Account = new Schema({

    local: {
        email: {
            type: String
        },
        password: {
            type: String
        },
        picture: {
            width: {
                type: String
            },
            height: {
                type: String
            },
            url: {
                type: String
            },
            thumbnail: {
                type: String
            }
        },
        name: {
            first: {
                type: String
            },
            last: {
                type: String
            },
            fullname: {
                type: String
            }
        }
    },
    facebook: new Schema({
        _id: false,
        "New Field": {
            type: String
        }
    }),
    google: {
        type: Schema.Types.Mixed
    }
});

exports.default = _mongoose2.default.model('account', Account, 'account');