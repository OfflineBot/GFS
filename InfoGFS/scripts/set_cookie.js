const set_cookie = (res, name, value) => {
    let current_date = new Date()
    let next_week_date = new Date(current_date.getTime() + (7 * 24 * 60 * 60 * 1000));
    res.cookie(name, value, {httpOnly: true, expires: next_week_date})
}

module.exports = set_cookie