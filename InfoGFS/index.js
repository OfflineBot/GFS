const express = require("express")
const body_parser = require('body-parser')
const cookie_parser = require('cookie-parser')

const html_page = require('./routes/html.js')
const password_page = require('./routes/password.js')
//const sql_page = require('./routes/sql_injection.js')
const extraction_page = require('./routes/extraction.js')
const auth_page = require('./routes/auth.js')
const phishing_page = require('./routes/phishing.js')

const set_default_cookie = require('./scripts/default_cookie.js')


const port = 8000

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('static'))
app.use(body_parser.urlencoded({extended: true}))
app.use(cookie_parser())


//app.use("/sql", sql_page)
app.use("/password", password_page)
app.use("/html", html_page)
app.use("/extraction", extraction_page)
app.use("/auth", auth_page)
app.use("/phishing", phishing_page)


app.get("/", set_default_cookie, (req, res) => {
    let progress_value = req.cookies.progress

    progress_value = progress_value === undefined ? 0 : progress_value;
    
    res.render("main", {progress: progress_value})
})
app.post("/locate", (req, res) => {
    const redirect = req.body.route
    res.redirect(`/${redirect}`)
})

app.use((req, res) => {
    res.render("error")
});

app.listen(port, () => console.log(`Listening on: http://localhost:${port}`))

