const express = require("express")
const {allSkills, singlerSkill, createSkills,editSkills,eraseSkills} = require("../controllers/skills")
const {verifyToken} = require("../controllers/login")
const router = express.Router()

router.get("/skills",allSkills)
router.get("/skills/:id",singlerSkill)
router.post("/skills/create/",verifyToken,createSkills)
router.put("/skills/edit/:id",verifyToken,editSkills)
router.delete("/skills/delete/:id",verifyToken,eraseSkills)

module.exports = router