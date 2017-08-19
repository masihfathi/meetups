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
    } else if (typeof name !== 'String') {
        return res.status(400).json({
            error: true,
            message: 'name must be a string'
        })
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
    } else if (typeof description !== 'String') {
        return res.status(400).json({
            error: true,
            message: 'description must be a string'
        })
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
        return res.status(400).json({error: true, message: 'Error when saving group'});
    }
};

