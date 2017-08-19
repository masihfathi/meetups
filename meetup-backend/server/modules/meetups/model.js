import mongoose, {Schema} from 'mongoose';

const MEETUPSCHEMA = new Schema({
    title: {
        type: String,
        required: true,
        minLenght: [5, 'title at least must be 5 charecters']
    },
    description: {
        type: String,
        required: true,
        minLenght: [10, 'description at least must be 10 charecters']
    },
    eventDate: {
        type: Date
    }
}, {timestamps: true});
export default mongoose.model('Meetup', MEETUPSCHEMA);


