const router = require("express").Router();
const db = require("../../models");

router.post("/signup", async (req, res) => {
  try {
    const newUser = await db.User.create(req.body);
    // req.session.save(() => {
    //   req.session.user_id = newUser.id;
    //   req.session.loggedIn = true;

    //   res.status(200).json(newUser);
    // });

    res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await db.User.findOne({
      where: {
        username: req.body.username,
      },
    });

    //checking username
    console.log(userData);
    if (!userData) {
      res.status(400).json({ message: "incorrect username" });
      return;
    }

    //checking Password
    //const validPassword = await userData.checkPassword(req.body.password);
    if (req.body.password == !userData.password) {
      res.status(400).json({ message: "incorrect password" });
      return;
    }

    // req.session.save(() => {
    //     req.session.user_id = userData.id;
    //     req.session.loggedIn = true;
    //     res.json({user: userData, message: 'You are logged in!'});
    // });

    res.json({ user: userData, message: "You are logged in!" });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
