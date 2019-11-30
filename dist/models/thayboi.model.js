'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var Thayboi = new Schema({
    // _id: {
    //     type: Schema.Types.ObjectId
    // },
    information: {
        name: {
            type: String
        },
        picture: {
            type: String
        },
        gender: {
            type: Number
        },
        date_of_birth: {
            type: String
        },
        degree: {
            type: Array
        },
        skill: {
            type: Array
        },
        introduction: {
            type: String
        }
    },
    contact: {
        work_address: {
            type: Array
        },
        home_address: {
            type: Array
        },
        media: {
            youtube: {
                type: String
            },
            website: {
                type: String
            },
            facebook: {
                type: String
            }
        },
        schedule: {
            open: {
                type: String
            },
            close: {
                type: String
            }
        },
        fee: {
            type: Array
        },
        phone: {
            type: Array
        }

    },
    verification: {
        type: Boolean
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

exports.default = _mongoose2.default.model('thayboi', Thayboi, 'thayboi');