import express from "express";
import User from "../model/user";
import validateUser from "../model/validateUser";

const router = express.Router();

router.post("/adduser", async (req, res) => {
  const validation = await validateUser(req.body);
  if (validation.error) {
    return res.status(400).json({ error: validation.error.details[0].message });
  }
  const isEmailExist = await User.findOne({ email: req.body.email });
  if (isEmailExist) {
    return res.status(400).json({ error: "Email already exists" });
  }

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
