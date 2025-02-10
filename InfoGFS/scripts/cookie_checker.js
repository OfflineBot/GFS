const set_cookie = require('./set_cookie.js')

const cookie_level = (req, res, level) => {
    let current_cookie = req.cookies.progress 
    if (current_cookie < level) {
        let current_date = new Date()
        
        set_cookie(res, "progress", `${level}`)
    }
}

module.exports = cookie_level