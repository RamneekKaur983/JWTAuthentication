const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes')
const cookieParser = require('cookie-parser');


const app = express();


app.use(express.json());
app.use(cookieParser());


mongoose.connect('mongodb+srv://Ramneek:iamunique@cluster0.cyzml.mongodb.net/JWT', {useNewUrlParser: true , useUnifiedTopology: true});
app.use(authRoutes)
app.use(taskRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
