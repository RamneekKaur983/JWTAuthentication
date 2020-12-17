const { Router } = require("express");
const authController = require("../controllers/authController");

const router = Router();

// Deleted .get requests ...(No need of it) ;

router.post("/signup", authController.signup_post);

router.post("/login", authController.login_post);

module.exports = router;
