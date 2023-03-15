console.log("No value for API_KEY yet:", process.env.API_KEY);

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

console.log("Now the value for API_KEY is:", process.env.API_KEY);
