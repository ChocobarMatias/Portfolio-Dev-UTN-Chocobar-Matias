const express = require("express")
const {allContacts, singleContact, createContacts} = require("../controllers/contactame")
const {verifyToken} = require("../controllers/login")
const router = express.Router()

router.get("/contactame",allContacts)
router.get("/contactame/:id",singleContact)
router.post("/contactame/create/",createContacts)

module.exports = router