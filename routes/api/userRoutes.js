const router = require("express").Router();
const userController = require("../../controllers/useController.js");

router.route("/signup")
    .post(userController.create);

router.route("/login")
    .get(userController.login)



router
    .route("/:id")
    .get(userController.findById)
    .put(userController.update)
    .delete(tripsController.remove);

module.exports = router;