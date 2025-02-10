const express = require('express'), router = express.Router()

const auth = (req, res, next) => {
    let auth_var = req.cookies.is_auth
    if (auth_var != 'true') {
        return res.redirect("auth/no-access")
    } else {
        return next()
    }
}

router.get("/", auth, (req, res) => {
    res.render("done", {message: "You have finished the last task!"})
})

router.get("/no-access", (req, res) => {
    res.render("auth/auth.ejs")
})


module.exports = router