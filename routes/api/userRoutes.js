const router = require("express").Router();
const userController = require("../../controllers/useController.js");

router.route("/")
    .get(userController.login)
    .post(userController.create);

router
    .route("/:id")
    .get(userController.findById)
    .put(userController.update)
    .post(userController.find)
    .delete(tripsController.remove);

module.exports = router;