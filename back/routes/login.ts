import express from "express";
import User from "../model/user";
import validateUser from "../model/validateUser";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

  //Generate token
  const token = jwt.sign(
    // payload data
    {
      username: user.username,
      id: user._id,
    },
    process.env.TOKEN_SECRET!
  );

  res.header("auth-token", token).json({
    error: null,
    data: {
      message: "You have sucessfully login",
      token,
    },
  });
});

export = router;
