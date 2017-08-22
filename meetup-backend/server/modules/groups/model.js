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
/*
 GROUPSCHEMA.statics.addMeetup = async function (id, args) {
    //console.log("--------------------------------");
    const MEETUP = mongoose.model('Meetup');
    const GROUP = await this.findById(id);
    const meetup = await new MEETUP({
    ...args, GROUP:id
    });
    console.log('\n GROUP:\n', Group);
    console.log('\n GROUP ID:\n', Group.id);
    console.log("--------------------------------");
    console.log('\n Meetup:\n', meetup);
    GROUP.meetups.push(meetup);
    const result = Promise.all([meetup.save(), GROUP.save()]);
    return result;
 };
 */
GROUPSCHEMA.statics.addMeetup = async function (id, args) {
    const MEETUP = mongoose.model('Meetup');
    // we add the group id to the meetup group element
    // finally this group id is the author of the meetup
    const meetup = await new MEETUP({
        ...args, group: id
    });
    const group = await this.findByIdAndUpdate(
            id,
            {$push: {meetups: meetup.id}}
    );
    return {
        meetup: await meetup.save(),
        group
    };
};
export default mongoose.model('Group', GROUPSCHEMA);


