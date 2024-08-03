const express = require("express");
const { allExperiences, singleExperience, createExperiences, editExperiences, eraseExperiences } = require("../controllers/experiencias");
const {verifyToken} = require("../controllers/login")
const router = express.Router();

router.get("/experiencias", allExperiences);
router.get("/experiencias/:id", singleExperience);
router.post("/experiencias/create", verifyToken, createExperiences);
router.put("/experiencias/edit/:id", verifyToken, editExperiences);
router.delete("/experiencias/delete/:id", verifyToken, eraseExperiences);

module.exports = router;
