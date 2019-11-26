import mongoose, { mongo } from 'mongoose';
const {Schema} = mongoose
var Report = new Schema({
    // id: {
    //     type: Schema.Types.ObjectId
    // },
    user: new Schema({
        _id : false ,
        id_user: {
            type: Schema.Types.ObjectId,
            required: true
        },
        name: {
            type: String
        },
        avatar: {
            type: String
        }
    }),
    content: {
        type: String,
        required: true
    },
    thayboi: new Schema({
        id_thayboi: {
            type: Schema.Types.ObjectId
        },
        name: {
            type: String
        }
    }),
    created_at:{
        type: Date,
        required: true,
        default: Date.now
    },
    updated_at:{
        type: Date,
        required: true,
        default: Date.now
    },
});

export default  mongoose.model('report', Report,'report');
