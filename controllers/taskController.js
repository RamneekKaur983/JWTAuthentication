const Task = require("../models/Task");
const mongoose = require('mongoose');
const { findById } = require("../models/Task");


module.exports.add_task = async (req, res) =>
{

    try{
        console.log(req.body.content)
        const content = req.body.content
        const task = await Task.create({content})
        res.json(task)


    }
    catch(err)
    {
        console.log(err)
        res.status(400 ).send(err)
    }

}

module.exports.delete_task = async (req, res) =>
{

        try{

           const task= await Task.deleteOne({content:req.body.content})
           if(task.deletedCount==0)
           {
               res.send("No task exsists")
           }
           else
           {
               res.send("Task Deleted")
           }
            

        }
        catch(err)
        {
            console.log(err)
            res.status(400).send(err)
        }
}

module.exports.update_task = async(req, res) =>
{
   
    try{
     const task=   await Task.findByIdAndUpdate(req.params.id, {content : req.body.content})
        res.json(task)
    }
    catch(err)
    {
        console.log(err)
        res.status(400).send(err)
    }

}

module.exports.clear = async(req ,res) =>
{
    try{
        await Task.deleteMany({})
        res.send("Cleared All")
    }
    catch(err)
    {
        console.log(err)
        res.status(400).send(err)
    }
}