const set_cookie = require('./set_cookie.js')

const set_default_cookie = function default_cookie(req, res, next) {
    let my_cookie = req.cookies.progress
    let auth_cookie = req.cookies.is_auth
    if (my_cookie === undefined) {
        set_cookie(res, "progress", "0")
    }
    if (auth_cookie === undefined) {
        set_cookie(res, "is_auth", "false")
    } else if (my_cookie == '0') {
        set_cookie(res, "is_auth", "false")
    }
    
    next()
}

module.exports = set_default_cookie