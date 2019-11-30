'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _thayboi = require('../../models/thayboi.model');

var _thayboi2 = _interopRequireDefault(_thayboi);

var _thayboi3 = require('../../schema/thayboi.schema');

var _joi = require('@hapi/joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [
//thayboi-add
{
    method: 'POST',
    path: '/api/v1/thayboi/add',

    handler: async function handler(request, h) {
        try {

            var thayboi = new _thayboi2.default(request.payload);
            var result = await thayboi.save();
            return h.response(result);
        } catch (error) {
            return h.response(error).code(500);
        }
    },
    options: {
        auth: false,
        validate: {
            //payload: thayboiSchema,

            failAction: function failAction(request, h, err) {
                console.log(err);
                return err;
            }
        }

    }

},
//thayboi-edit
{
    method: 'POST',
    path: '/api/v1/thayboi/edit',

    handler: async function handler(request, h) {
        var person = await _thayboi2.default.findByIdAndUpdate({ _id: request.payload._id }, request.payload);
        return h.response(person);
    },
    options: {
        auth: false,
        validate: {
            //payload: thayboiSchema,

            failAction: function failAction(request, h, err) {
                console.log(err);
                return err;
            }
        }

    }

},
// thayboi-del
{
    method: "POST",
    path: "/api/v1/thayboi/del",
    handler: async function handler(request, h) {
        try {
            var res = await _thayboi2.default.deleteOne({ _id: request.payload._id });
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