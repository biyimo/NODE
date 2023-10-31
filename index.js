// import express
const express = require("express")

// initialize express function
const app = express()

// create your port
const port = 9010



// introducing user routes to server 
const userRouter = require("./routes/users")
app.use(userRouter)


// import our port
app.listen(port, () => {
    console.log("server started successfully")
})

