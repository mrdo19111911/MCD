'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _rate = require('../../models/rate.model');

var _rate2 = _interopRequireDefault(_rate);

var _rate3 = require('../../schema/rate.schema');

var _joi = require('@hapi/joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [
//rate-add
{
    method: "POST",
    path: "/api/v1/rate/add",
    handler: async function handler(request, h) {
        try {
            var rate = new _rate2.default(request.payload);
            var result = await rate.save();
            return h.response(result);
        } catch (error) {
            return h.response(error).code(500);
        }
    },
    options: {
        auth: false,
        validate: {
            // payload: rateSchema,

            failAction: function failAction(request, h, err) {
                console.log(err);
                return err;
            }
        }
    }

},
// rate - edit
{
    method: "POST",
    path: "/api/v1/rate/edit",
    handler: async function handler(request, h) {
        var rate = await _rate2.default.findByIdAndUpdate({ _id: request.payload._id }, request.payload);
        return h.response(rate);
    },
    options: {
        validate: {
            payload: _rate3.rateSchema,

            failAction: function failAction(request, h, err) {
                console.log(err);
                return err;
            }
        }
    }

},
// rate - delete
{
    method: "POST",
    path: "/api/v1/rate/del",
    handler: async function handler(request, h) {
        try {
            var res = await _rate2.default.deleteOne({ _id: request.payload._id });
            return h.response(res.deletedCount);
        } catch (error) {
            return h.response(error).code(500);
        }
    },
    options: {
        validate: {
            payload: _joi2.default.object({
                _id: _joi2.default.string().required()
            }),
            failAction: function failAction(request, h, err) {
                console.log(err);
                return err;
            }
        }
    }
}];