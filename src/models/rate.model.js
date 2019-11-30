import mongoose from 'mongoose';
const { Schema } = mongoose;
var Rate = new Schema({
    user: {

        id_user: {
            type: Schema.Types.ObjectId
        },
        name: {
            type: String
        },
        picture: {
            type: String
        }
    },
    content: {
        type: String,

    },
    detail: {
        type: Array,
    },
    id_thayboi: {
        type: Schema.Types.ObjectId
    },
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

export default mongoose.model('rate', Rate, 'rate');