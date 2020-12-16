const mongoose= require('mongoose')

const taskSchema = new mongoose.Schema({


    content : String

})

  
const User = mongoose.model('task', taskSchema);
  
module.exports = User;
