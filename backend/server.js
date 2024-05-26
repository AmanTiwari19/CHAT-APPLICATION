import express from "express";
import dotenv from "dotenv";
import authroutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./routes/message.routes.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(express.json()); //to parse the incomming requests with json payload(from req.body)
app.use(cookieParser());

app.use("/api/auth", authroutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//   // root route
//   res.send("hello 00world");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server running on port ${PORT}`);
});
