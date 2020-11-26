import express from "express";
import User from "../model/user";

const router = express.Router();

router.post("/adduser", async (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const savedUser = await user.save();
    console.log(savedUser);
    res.json({ error: null, data: savedUser });
  } catch (err) {
    res.status(400).json({ err });
  }
});

export = router;
