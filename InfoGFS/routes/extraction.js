const express = require('express'), router = express.Router()
const cookie_level = require('../scripts/cookie_checker.js')


router.get("/", (req, res) => {
    res.render("extraction/extraction")
})

router.post("/", (req, res) => {
    const input = req.body.password 
    const target = "secretPassword"
    if (input !== target) {
        return res.redirect('/extraction/')
    } else {
        cookie_level(req, res, 3)
        return res.redirect('/extraction/done')
    }
})

router.get("/done", (req, res) => {
    res.render("done", {message: "You have finished the fifth task!"})
})

module.exports = router