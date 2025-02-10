const express = require('express'), router = express.Router()
const body_parser = require('body-parser')
const cookie_level = require('../scripts/cookie_checker.js')

router.use(body_parser.urlencoded({extended: true}))

router.get("/", (req, res) => {
    res.render("password/password")
})

router.get("/bruteforce", (req, res) => {
    res.render("password/brute")
})

router.post("/bruteforce", (req, res) => {
    const current_password = 'asdf'
    const pass = req.body.password
    if (current_password == pass) {
        cookie_level(req, res, 2)
        return res.redirect("/password/bruteforce/done")
    } else {
        return res.redirect("/password/bruteforce")
    }

    // curl "password=asdf" -X POST http://localhost:8000/bruteforce
})

router.get("/bruteforce/done", (req, res) => {
    res.render("done", {message: "You have finished the second task!"})
})

router.get("/dictonary", (req, res) => {
    res.render("password/dict")
})

router.post("/dictonary", (req, res) => {
    const current_password = '1234'
    const pass = req.body.password
    if (current_password == pass) {
        cookie_level(req, res, 2)
        return res.redirect("/password/dictonary/done")
    } else {
        return res.redirect("/password/dictonary")
    }
})
router.get("/dictonary/done", (req, res) => {
    res.render("done", {message: "You have finsiehd the second task!"})
})

module.exports = router