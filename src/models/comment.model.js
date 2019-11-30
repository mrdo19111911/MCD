import mongoose from 'mongoose';
const { Schema } = mongoose
var Comment = new Schema({
    // id: {
    //     type: Schema.Types.ObjectId
    // },
    user: {
        id_user: {
            type: String
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
        required: true
    },
    id_rate: {
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


export default mongoose.model('comment', Comment, 'comment');