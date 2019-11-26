import mongoose from 'mongoose';
const {Schema} = mongoose;
var Thayboi = new Schema({
    // _id: {
    //     type: Schema.Types.ObjectId
    // },
    name: {
        type: String,
        required: true
    },
    address: {
        type: Array
    },
    date_of_birth : {
        type : String
    },
    phone: {
        type: String,
        required: true
    },
    gender: {
        type: Number
    },
    avatar: {
        type: String
    },
    skill : {
        type : String
    },
    exp : {
        type : String
    },
    degree : {
        type : String
    },
    media : new Schema({
        _id : false,
        youtube : {
            type : String
        },
        website : {
            type : String
        }
    }),
    verification : {
        type : Boolean
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

  export default  mongoose.model('thayboi', Thayboi,'thayboi');