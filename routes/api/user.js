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

// router.post("/login", async (req, res) => {
//     try {

//     }
// })

module.exports = router;
