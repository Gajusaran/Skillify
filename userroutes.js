const express = require("express");
const router= express.Router();

const registeruser = require("./usercontroller");

router.route("/api/v1/reg").post(registeruser);

module.exports = router;