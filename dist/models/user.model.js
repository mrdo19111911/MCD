'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var Account = new Schema({
    // id: {
    //     type: Schema.Types.ObjectId
    // },
    username: {
        type: String
    },
    local: new Schema({
        _id: false,
        email: {
            type: String
        },
        password: {
            type: String
        },
        picture: new Schema({
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
        }),
        name: new Schema({
            first: {
                type: String
            },
            last: {
                type: String
            },
            fullname: {
                type: String
            }
        })
    }),
    facebook: new Schema({
        _id: false,
        name: {
            type: String
        },
        email: {
            type: String
        },
        picture: {
            height: {
                type: Number
            },
            width: {
                type: Number
            },
            url: {
                type: String
            }
        }
    }),
    google: new Schema({
        _id: false,
        name: {
            type: String
        },
        email: {
            type: String
        },
        picture: {
            type: String
        }
    })
});

exports.default = _mongoose2.default.model('account', Account, 'account');