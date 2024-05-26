import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generatetoken.js";

export const signUp = async (req, res) => {
  try {
    const { fullname, username, password, confirmpassword, gender } = req.body;
    if (password !== confirmpassword) {
      return res.status(400).json({ error: "password don't match" });
    }

    const user = await User.findOne({ username });
    if (user) {
      // console.log("sighupUser");
      return res.status(400).json({ error: "username already existed" });
    }
    //  hash password here
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyprofilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlprofilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullname,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyprofilePic : girlprofilePic,
    });
    // console.log("sighupUser");
    // console.log("saving the user")
    if (newUser) {
      //generate jwt token here
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.send(400).json({
        error: "invalid data",
      });
    }
  } catch (error) {
    console.log("error in signup controller", error.message);
    res.status(500).json({ error: "internal server errror" });
  }
  // res.send("signup user");
};
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    // if (!username || !password) {
    //   return res.status(400).json({ error: "Missing username or password" });
    // }
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "invalid username password" });
    }
    generateTokenAndSetCookie(user._id, res);
    res.status(201).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("error in login controller", error.message);
    res.status(500).json({ error: "internal server errror" });
  }
};

export const logOut = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "logged out successfully" });
  } catch (error) {
    console.log("error in login controller", error.message);
    res.status(500).json({ error: "internal server errror" });
  }
};
