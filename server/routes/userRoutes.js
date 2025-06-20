const express = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/all", userController.getAllUsers);
router.get("/", authMiddleware.authenticateUser, userController.getUserById);
router.post("/logout", authMiddleware.authenticateUser, userController.logout);
router.put(
  "/updatename",
  authMiddleware.authenticateUser,
  userController.updatename
);
router.put(
  "/changepassword",
  authMiddleware.authenticateUser,
  userController.changepassword
);
router.delete(
  "/deleteaccount",
  authMiddleware.authenticateUser,
  userController.deleteuser
);

module.exports = router;
