import mongoose, {Schema} from 'mongoose';

const MEETUPSCHEMA = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
export default mongoose.model('Meetup', MEETUPSCHEMA);


