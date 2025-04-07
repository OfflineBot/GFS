const express = require('express'), router = express.Router()
const cookie_level = require('../scripts/cookie_checker.js')

const auth = (req, res, next) => {
    let auth_var = req.cookies.is_auth
    if (auth_var != 'true') {
        return res.redirect("auth/no-access")
    } else {
        return next()
    }
}

router.get("/", auth, (req, res) => {

    cookie_level(req, res, 4)
    res.render("done", {message: "4. Aufgabe fertig!"})
})

router.get("/no-access", (req, res) => {
    res.render("auth/auth.ejs")
})


module.exports = router