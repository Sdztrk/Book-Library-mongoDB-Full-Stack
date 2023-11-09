// imports
const express = require("express")
require("dotenv").config()
require("colors")
const {connectDB} = require("./db")
var cors = require('cors');

// const bookRoutes = require("./routes/bookRoutes")


//importing port
const PORT = process.env.PORT


const app = express()
//connecting to db
connectDB()

//middlewares
app.use(express.json())
app.use(cors());

//routes
app.use("/api/v1", require("./routes/bookRoutes"))




app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`.yellow.underline)
})

