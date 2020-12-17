const Task = require("../models/Task");
const mongoose = require('mongoose');



module.exports.add_task = async (req, res) =>
{
   
    try{
        console.log(req.body.content)
        const content = req.body.content
        const task = await Task.create({content})
         res.end("Post Successfully: \n" + JSON.stringify(task, null, 4));


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
           if(task)
           {
            res.end( "Deleted Task: \n" + JSON.stringify(task, null, 4));
           }
           else
           {
            res.end( "Given Task Does Not Exsist: \n" + JSON.stringify(task, null, 4));
       
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
     const task=   await Task.findByIdAndUpdate(req.params.id)
     if(task.id !=null)
     {
        res.end("Update Successfully! \n" + JSON.stringify(task, null, 4));
     }
     else
     {
        res.end("Task Doesn't Exsist:\n:" + JSON.stringify(task, null, 4));
     }
     
    }
    catch(err)
    {
        console.log(err)
      
    }

}

module.exports.clear = async(req ,res) =>
{
    try{
       const task= await Task.deleteMany({})
       res.end(" Cleared All Tasks: \n" + JSON.stringify(task, null, 4)); 
    }
    catch(err)
    {
        console.log(err)
        res.status(400).send(err)
    }
}