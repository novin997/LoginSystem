import express from "express";
import User from "../model/user";
import validateUser from "../model/validateUser";
import bcrypt, { hash } from "bcryptjs";

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

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashPassword,
  });

  try {
    const savedUser = await user.save();
    res.json({ error: null, data: savedUser._id });
  } catch (err) {
    res.status(400).json({ err });
  }
});

export = router;
