import mongoose from 'mongoose';
const { Schema } = mongoose;
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
        "New Field": {
            type: String
        }
    }),
    google: {
        type: Schema.Types.Mixed
    }
});


export default mongoose.model('account', Account, 'account');