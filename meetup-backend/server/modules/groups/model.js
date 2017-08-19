import mongoose, {Schema} from 'mongoose';

const GROUPSCHEMA = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minLenght: [5, 'name at least must be 5 charecters']
    },
    description: {
        type: String,
        required: true,
        minLenght: [10, 'description at least must be 10 charecters']
    },
    category: {
        type: String
    },
    meetups: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Meetup'
        }
    ]
}, {timestamps: true});
/*
 * addMeetup @static method to add meetup
 */
GROUPSCHEMA.statics.addMeetup = async function (id, args) {
    //console.log("--------------------------------");
    const MEETUP = mongoose.model('Meetup');
    const GROUP = await this.findById(id);
    //console.log('\n GROUP:\n', GROUP);
    const meetup = await new MEETUP({
        ...args, GROUP
    });
    //console.log("--------------------------------");
    //console.log('\n Meetup:\n', meetup);
    GROUP.meetups.push(meetup);
    const result = Promise.all([meetup.save(), GROUP.save()]);
    return result;
};
export default mongoose.model('Group', GROUPSCHEMA);


