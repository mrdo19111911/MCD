'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _comment = require('../../models/comment.model');

var _comment2 = _interopRequireDefault(_comment);

var _comment3 = require('../../schema/comment.schema');

var _joi = require('@hapi/joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [
// comment-add
{
    method: "POST",
    path: "/api/v1/comment/add",
    handler: async function handler(request, h) {

        try {
            var comment = new _comment2.default(request.payload);
            var result = await comment.save();
            return h.response(result);
        } catch (error) {
            return h.response(error).code(500);
        }
    },
    options: {
        auth: false,
        validate: {
            //payload: commentSchema,

            failAction: function failAction(request, h, err) {
                console.log(err);
                return err;
            }
        }
    }

},
// comment-edit
{
    method: "POST",
    path: "/api/v1/comment/edit",
    handler: async function handler(request, h) {
        var comment = await _comment2.default.findByIdAndUpdate({ _id: request.payload._id }, request.payload);
        return h.response(comment);
    },
    options: {
        auth: false,
        validate: {

            //payload: commentSchema,

            failAction: function failAction(request, h, err) {
                console.log(err);
                return err;
            }
        }
    }

},
//comment-delete
{
    method: "POST",
    path: "/api/v1/comment/del",
    handler: async function handler(request, h) {
        try {
            var res = await _comment2.default.deleteOne({ _id: request.payload._id });
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