'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _report = require('../../models/report.model');

var _report2 = _interopRequireDefault(_report);

var _report3 = require('../../schema/report.schema');

var _joi = require('@hapi/joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
    method: "POST",
    path: "/api/v1/report/add",
    handler: async function handler(request, h) {

        try {
            var report = new _report2.default(request.payload);
            var result = await report.save();
            return h.response(result);
        } catch (error) {
            return h.response(error).code(500);
        }
    },
    options: {
        validate: {
            payload: _report3.reportSchema,

            failAction: function failAction(request, h, err) {
                console.log(err);
                return err;
            }
        }
    }

},
// report - edit
{
    method: "POST",
    path: "/api/v1/report/edit",
    handler: async function handler(request, h) {
        var report = await _report2.default.findByIdAndUpdate({ _id: request.payload._id }, request.payload);
        return h.response(report);
    },
    options: {
        validate: {
            payload: _report3.reportSchema,

            failAction: function failAction(request, h, err) {
                console.log(err);
                return err;
            }
        }
    }

},
// report - delete
{
    method: "POST",
    path: "/api/v1/report/del",
    handler: async function handler(request, h) {
        try {
            var res = await _report2.default.deleteOne({ _id: request.payload._id });
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