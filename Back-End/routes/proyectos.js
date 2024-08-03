const express = require("express")
const {allProjects, singleProject, createProjects,editProjects,eraseProjects} = require("../controllers/proyectos")
const {verifyToken} = require("../controllers/login")
const router = express.Router()

router.get("/proyectos",allProjects)
router.get("/proyectos/:id",singleProject)
router.post("/proyectos/create/",verifyToken,createProjects)
router.put("/proyectos/edit/:id",verifyToken,editProjects)
router.delete("/proyectos/delete/:id",verifyToken,eraseProjects)

module.exports = router