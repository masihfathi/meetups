import Group from './model';

export const createGroup = async(req, res) => {
    const {name, description, category} = req.body;
    /*
     * some validation for model in controller like rules method in yii2 models
     */
    if (!name) {
        return res.status(400).json({
            error: true,
            message: 'name must be provided'
        });
    } else if (typeof name !== 'string') {
        return res.status(400).json({
            error: true,
            message: 'name must be a string'
        });
    } else if (name.length < 5) {
        return res.status(400).json({
            error: true,
            message: 'name must be at least 5 charecters'
        });
    }
    if (!description) {
        return res.status(400).json({
            error: true,
            message: 'description must be provided'
        });
    } else if (typeof description !== 'string') {
        return res.status(400).json({
            error: true,
            message: 'description must be a string'
        });
    } else if (description.length < 10) {
        return res.status(400).json({
            error: true,
            message: 'description must be at least 10 charecters'
        });
    }
    const GROUP = new Group({name, description});
    try {
        return res.status(201).json({error: false, group: await GROUP.save()});
    } catch (e) {
        return res.status(400).json({error: true, message: e.message});
    }
};
/*
 * Create group meetup
 */
export const createGroupMeetup = async (req, res) => {
    const {title, description} = req.body;
    const {groupId} = req.params;
    //console.log('groupId', groupId);
    /*
     * some validation for model in controller like rules method in yii2 models
     */
    if (!title) {
        return res.status(400).json({
            error: true,
            message: 'title must be provided'
        });
    } else if (typeof title !== 'string') {
        return res.status(400).json({
            error: true,
            message: 'title must be a string'
        });
    } else if (title.length < 5) {
        return res.status(400).json({
            error: true,
            message: 'title must be at least 5 charecters'
        });
    }
    if (!description) {
        return res.status(400).json({
            error: true,
            message: 'description must be provided'
        });
    } else if (typeof description !== 'string') {
        return res.status(400).json({
            error: true,
            message: 'description must be a string'
        });
    } else if (description.length < 10) {
        return res.status(400).json({
            error: true,
            message: 'description must be at least 10 charecters'
        });
    }
    if (!groupId) {
        return res.status(400).json({
            error: true,
            message: 'groupId must be provided'
        });
    }
    try {
        const [SAVEDMEETUP,SAVEDGROUP] = await Group.addMeetup(groupId, {title, description});
        return res.status(201).json({
            error:false,
            SAVEDMEETUP,
            SAVEDGROUP
        });
    } catch (e) {
        return res.status(400).json({
            error: true,
            message: e.message
        });
    }
};
/*
 * Get all meetups
 */
export const getAllGroups = async (req,res) => {
    try{
        return res.status(200).json({groups: await Group.find({})});
    }catch (e) {
        return res.status(400).json({
            error:true,
            message: e.message
        });
    }
};