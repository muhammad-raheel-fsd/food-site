const express = require("express");
const Controller = require("../controller/controller");
const viewsMiddleware = require("../middleware/viewsMiddleware");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("*", viewsMiddleware);
router.get("/", Controller.get_index);
router.get("/about", Controller.get_about);
router.get("/menu", Controller.get_menu);
router.get("/contact", Controller.get_contact);
router.get("/login", Controller.get_login);
router.get("/signup", Controller.get_signup);
router.get("/details/:id", authMiddleware, Controller.get_product_details);
router.post("/signup", Controller.post_signup);
router.post("/login", Controller.post_login);
router.get("/logout", Controller.get_logout);

module.exports = router;
