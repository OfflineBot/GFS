const express = require('express'), router = express.Router()
const cookie_level = require('../scripts/cookie_checker.js')

router.get("/", (req, res) => {
    res.render("html/intro")
})

router.post("/", (req, res) => {

    cookie_level(req, res, 1)

    res.redirect("/html/done")
})

router.get("/done", (req, res) => {
    res.render("done", {message: "You have finsihed the first task!"})
})


module.exports = router