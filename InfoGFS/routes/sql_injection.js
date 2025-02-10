const express = require('express'), router = express.Router()
const cookie_level = require('../scripts/cookie_checker.js')
const sql = require('sqlite3').verbose()
const fs = require('fs')

fs.unlink('data.sql', (err) => {
    if (err) console.log("file not found: ", err)
})

let db = new sql.Database("data.sql", (err) => {
    if(err) console.log("could not connect: ", err)
})

db.serialize(() => {
    db.run('CREATE TABLE test (name STRING UNIQUE, password STRING)')
    db.run('INSERT INTO test (name, password) VALUES(?,?)', ['admin', 'password123'])
})

router.get("/", (req, res) => {
    res.render('sql/sql')    
})
router.post("/", (req, res) => {
    const name = req.body.name.trim()
    const pass = req.body.password.trim()

    db.get(`SELECT * FROM test WHERE name = '${name}' AND password = '${pass}'`, [], (err, row) => {
        if(err) {console.log(err)}
        if (!row) {
            return res.redirect("/sql/")
        } else {
            cookie_level(req, res, 3)
            return res.redirect("/sql/done")
        }
    });

})

router.get("/done", (req, res) => {
    res.render("done", {message: "You have finished the third task!"})
})

module.exports = router
