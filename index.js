const express = require("express");
const app = express();

const mongoose = require('mongoose');

const PORT = 8082;
const DB_URI = "mongodb://127.0.0.1:27017";

const statusRoutes = require('./routes/user.routes')

mongoose.connect(DB_URI)
    .then(() => {
        console.log('db connection successfull', DB_URI);
        app.get("/", (request, response) => {
            console.log("Current route: /");
            // response.json({"message": "Server is working!"});
            response.send('Server is working!')
        });
        app.use("/status", statusRoutes)
        app.listen(PORT, () => {
            console.log("Listening at", PORT)
        })
    }).catch((e) => {
        console.log('db connection failed', e)
    })

    // Create a new file user.routes.js in a new routes folder and initialise the express router inside it.
    // Create 3 new routes. 
    // POST /user/register
    