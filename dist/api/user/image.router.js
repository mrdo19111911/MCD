"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var fs = require('fs');
exports.default = [
//upload image
{
    method: "POST",
    path: "/api/v1/image/upload",
    handler: async function handler(request, h) {
        var payload = request.payload;

        console.log(payload.id);
        var result = await handleFileUpload(payload);
        return h.response(result);
    },
    options: {
        auth: false,
        payload: {
            output: "stream",
            parse: true,
            allow: "multipart/form-data",
            maxBytes: 2 * 1000 * 1000
        }
    }
}, {
    method: "GET",
    path: "/api/v1/image/{id}",
    handler: async function handler(request, h) {
        return h.file("./upload/" + request.params.id);
    },
    options: {
        auth: false
    }
}];


var handleFileUpload = async function handleFileUpload(payload) {
    var filename = "" + Date.now() + payload.id + payload.file.hapi.filename;
    // console.log(filename);
    var data = payload.file._data;
    try {
        var result = fs.writeFileSync('./upload/' + filename, _data);
        var _data = {
            error: null,
            filename: filename

        };
        return _data;
    } catch (error) {
        return error;
    }
};