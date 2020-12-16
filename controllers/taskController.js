const Task = require("../models/Task");


module.exports.add_task = async (req, res) =>
{

    try{
        const content = req.body.content
        const task = await Task.create({content})


    }
    catch(err)
    {
        console.log(err)
        res.status(400)
    }

}

module.exports.delete_task = async (req, res) =>
{

        try{

            await Task.deleteOne({content})

        }
        catch(err)
        {
            console.log(err)
            res.status(400)
        }
}

module.exports.update_task = async(req, res) =>
{

    try{
        await Task.findOneAndUpdate({_id : req.body._id} , {content : req.body.content})
    }
    catch(err)
    {
        console.log(err)
        res.status(400)
    }

}

module.exports.clear = async(req ,res) =>
{
    try{
        await Task.deleteMany({})
    }
    catch(err)
    {
        console.log(err)
    }
}