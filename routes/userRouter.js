const userController = require("../controllers/userController");

const router = require("express").Router();

router.post("/user", userController.addUser);
router.post("/login", userController.loginUser);
//router.post("/user/resetPassword", userController.resetPassword); //I am working on this faceing issue.
router.put("/me/:id", userController.updateUser);
router.post("/user/:id", userController.updateUser);

module.exports = router;
