const express = require("express")
const {allCertificates, singleCertificate, createCertificates,editCertificates,eraseCertificates} = require("../controllers/certificaciones")
const {verifyToken} = require("../controllers/login")
const router = express.Router();

router.get("/certificados",allCertificates)
router.get("/certificados/:id",singleCertificate)
router.post("/certificados/create/",verifyToken,createCertificates)
router.put(`/certificados/edit/:id`,verifyToken,editCertificates)
router.delete("/certificados/delete/:id",verifyToken,eraseCertificates)

module.exports = router