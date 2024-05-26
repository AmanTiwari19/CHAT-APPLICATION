import jwt from "jsonwebtoken";
const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.jwt_secret, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxage: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, //prevent xss attack cross site scripting attack
    sameSite: "strict", //csrf attacks crosite request forgery attack
    secure: process.env.NODE_ENV !== "development", //cookie only works in https
  });
};
export default generateTokenAndSetCookie;
