'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reaction = require('../../models/reaction.model');

var _reaction2 = _interopRequireDefault(_reaction);

var _reaction3 = require('../../schema/reaction.schema');

var _joi = require('@hapi/joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [
// reaction-add
{
    method: "POST",
    path: "/api/v1/reaction/add",
    handler: async function handler(request, h) {

        try {
            var reaction = new _reaction2.default(request.payload);
            var result = await reaction.save();
            return h.response(result);
        } catch (error) {
            return h.response(error).code(500);
        }
    },
    options: {
        auth: false,
        validate: {
            payload: _reaction3.reactionSchema,

            failAction: function failAction(request, h, err) {
                console.log(err);
                return err;
            }
        }
    }

},
//reaction-edit
{
    method: "POST",
    path: "/api/v1/reaction/edit",
    handler: async function handler(request, h) {
        var rate = await _reaction2.default.findByIdAndUpdate({ _id: request.payload._id }, request.payload);
        return h.response(rate);
    },
    options: {
        validate: {
            payload: _reaction3.reactionSchema,

            failAction: function failAction(request, h, err) {
                console.log(err);
                return err;
            }
        }
    }

},
//reaction-del
{
    method: "POST",
    path: "/api/v1/reaction/del",
    handler: async function handler(request, h) {
        try {
            var res = await _reaction2.default.deleteOne({ _id: request.payload._id });
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