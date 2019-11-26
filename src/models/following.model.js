import mongoose from 'mongoose';
const { Schema } = mongoose;
var Following = new Schema({
    user: new Schema({
        _id: false,
        id_user: {
            type: Schema.Types.ObjectId
        },
        name: {
            type: String
        },
        avatar: {
            type: String
        }
    }),
    thayboi: new Schema({
        _id: false,
        id_thayboi: {
            type: Schema.Types.ObjectId
        },
        name: {
            type: String
        },
        avatar: {
            type: String
        }
    }),
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    },
    updated_at: {
        type: Date,
        required: true,
        default: Date.now
    },
});

export default mongoose.model('following', Following, 'following');