const fs = require('fs');
export default [
    //upload image
    {
        method: "POST",
        path: "/api/v1/image/upload",
        handler: async function(request, h) {
            const { payload } = request;
            console.log(payload.id);
            const result = await handleFileUpload(payload)
            return h.response(result)
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
    },
    {
        method: "GET",
        path: "/api/v1/image/{id}",
        handler: async function(request, h) {
            return h.file(`./upload/${request.params.id}`)
        },
        options: {
            auth: false,
        }
    }
]


const handleFileUpload = async payload => {
    const filename = `${Date.now()}${payload.id}${payload.file.hapi.filename}`;
    // console.log(filename);
    const data = payload.file._data;
    try {
        const result = fs.writeFileSync('./upload/' + filename, data);
        const data = {
            error: null,
            filename: filename,

        }
        return (data);
    } catch (error) {
        return error;
    }
}