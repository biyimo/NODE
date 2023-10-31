const express = require("express")
const router = express.Router()



router.get("/users", (request, response) => {
    response.send("welcome to users page")
})


// to get a single resource
router.get("/users/:id", (request, response) => {
    response.send("welcome to user 1")
})

// to add a new 
router.post("/users", (request, response) => {
    response.send("new user added")
})

router.put("/users/:id", (request, response) => {
    response.send("update a user added")
})

router.delete("/users/:id", (request, response) => {
    response.send("delete a user added")
})

module.exports = router