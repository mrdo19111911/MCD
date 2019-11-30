import mongoose from 'mongoose';
const { Schema } = mongoose;
var Thayboi = new Schema({
    // _id: {
    //     type: Schema.Types.ObjectId
    // },
    information: {
        name: {
            type: String,
        },
        picture: {
            type: String,
        },
        gender: {
            type: Number,
        },
        date_of_birth: {
            type: String,
        },
        degree: {
            type: Array,
        },
        skill: {
            type: Array,
        },
        introduction: {
            type: String,
        }
    },
    contact: {
        work_address: {
            type: Array
        },
        home_address: {
            type: Array
        },
        media: {
            youtube: {
                type: String
            },
            website: {
                type: String
            },
            facebook: {
                type: String
            }
        },
        schedule: {
            open: {
                type: String
            },
            close: {
                type: String
            }
        },
        fee: {
            type: Array
        },
        phone: {
            type: Array
        },

    },
    verification: {
        type: Boolean
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

export default mongoose.model('thayboi', Thayboi, 'thayboi');