const express = require("express");
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users')

const cors = require("cors");


// Middleware to parse JSON request bodies
app.use(express.json());

app.use(cors());

mongoose.connect
("mongodb+srv://mernreact:varma123@cluster10.y2gq0al.mongodb.net/merndb1?retryWrites=true&w=majority&appName=Cluster10");


app.get("/getUsers", (req, res) => {
    UserModel.find({})
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.json(err);
    });

} );

app.post("/createUser", async (req, res) => {
    try {
        const userData = req.body; // Get user data from request body

        // Check if the request body is undefined or empty
        if (!userData || Object.keys(userData).length === 0) {
            return res.status(400).json({ error: "Request body is empty" });
        }

        // Check if all required fields are present
        const requiredFields = ['name', 'age', 'gender', 'phonenumber', 'email', 'location', 'doctor', 'details'];
        const missingFields = requiredFields.filter(field => !(field in userData));

        if (missingFields.length > 0) {
            return res.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
        }

        const newUser = new UserModel(userData); // Create a new user instance

        // Save the new user to the database
        await newUser.save();

        res.json(newUser); // Respond with the saved user data
    } catch (err) {
        res.status(400).json({ error: err.message }); // Handle validation errors and respond with an error message
    }
});



app.listen(3001,() =>{
    console.log("SERVER RUNS PERFECTLY");
});