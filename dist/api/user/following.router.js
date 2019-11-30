'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _following = require('../../models/following.model');

var _following2 = _interopRequireDefault(_following);

var _following3 = require('../../schema/following.schema');

var _joi = require('@hapi/joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [
//following 
{
    method: "POST",
    path: "/api/v1/following",
    handler: async function handler(request, h) {
        try {
            var following = new _following2.default(request.payload);
            var result = await following.save();
            return h.response(result);
        } catch (error) {
            return h.response(error).code(500);
        }
    },
    options: {
        validate: {
            payload: _following3.followingSchema,

            failAction: function failAction(request, h, err) {
                console.log(err);
                return err;
            }
        }
    }

},
//unfollowing 
{
    method: "POST",
    path: "/api/v1/unfollowing",
    handler: async function handler(request, h) {
        try {
            var result = await _following2.default.deleteOne({ _id: request.payload._id });
            return h.response(result.deletedCount);
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