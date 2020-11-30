import express from "express";
import User from "../model/user";
import validateUser from "../model/validateUser";
import bcrypt, { hash } from "bcryptjs";
import { Mongoose } from "mongoose";

const router = express.Router();

router.post("/login", async (req, res) => {
  const validation = await validateUser(req.body);
  if (validation.error) {
    return res.status(400).json({ error: validation.error.details[0].message });
  }

  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res
      .status(400)
      .json({ error: "There is no such email in the database" });
  }

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res
      .status(400)
      .json({ error: `Invalid password for ${user.email}` });

  res.json({
    error: null,
    data: {
      message: "You have sucessfully login",
    },
  });
});

export = router;
