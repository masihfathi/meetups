import mongoose, {Schema} from 'mongoose';

const GROUPSCHEMA = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minLenght : [5, 'name at least must be 5 charecters']
    },
    description: {
        type: String,
        required: true,
        minLenght : [10, 'description at least must be 10 charecters']        
    },
    category : {
        type: String
    },
    meetups:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Meetup'
        }
    ]
}, {timestamps: true});
export default mongoose.model('Group', GROUPSCHEMA);


