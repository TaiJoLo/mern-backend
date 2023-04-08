console.log("No value for GOOGLE_API_KEY yet:", process.env.GOOGLE_API_KEY);

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

console.log("Now the value for GOOGLE_API_KEY is:", process.env.GOOGLE_API_KEY);
console.log(
  "Now connecting to MongoDB",
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.s3klmsv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
);
