import mongoose from 'mongoose';
const {Schema} = mongoose;
var Reaction = new Schema({
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
    type: {
        type: String
    },
    id_rate: {
        type: Schema.Types.ObjectId
    },
    id_comment: {
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



export default  mongoose.model('reaction', Reaction,'reaction');