const express = require("express");
const { regUser, AuthUser } = require("../controllers/usersControllers");
const router = express.Router();

router.route("/").post(regUser);
router.route("/login").post(AuthUser);

module.exports = router;
