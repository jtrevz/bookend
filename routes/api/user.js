const router = require("express").Router();
const db = require("../../models");

router.post("/signup", async (req, res) => {
  try {
    const newUser = db.User.create(req.body);

    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.loggedIn = true;

      res.status(200).json(newUser);
    });
  } catch {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
