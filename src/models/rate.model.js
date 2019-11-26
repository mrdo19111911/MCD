import mongoose from 'mongoose';
const {Schema} = mongoose;
var Rate = new Schema({
    user: new Schema({
         _id : false ,
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
    content: {
        type: String,
        required: true
    },
    star: {
        type: Number,
        required: true
    },
    id_thayboi: {
        type: Schema.Types.ObjectId
    },
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

export default  mongoose.model('rate', Rate,'rate');