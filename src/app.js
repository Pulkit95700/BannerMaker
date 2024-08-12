import express from "express";
import cors from "cors";

// routes imports
import bannerRouter from "./routes/banner.route.js";

const allowedOrigins = [process.env.CORS_ORIGIN, "http://localhost:3000"];

const app = express();
app.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        // !origin allows for localhost
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Access-Control-Allow-Origin",
      "Access-Control-Allow-Credentials",
      "Access-Control-Allow-Methods",
      "Access-Control-Allow-Headers",
      "Origin",
      "X-Requested-With",
      "Accept",
    ],
  })
);

app.set("trust proxy", 1);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// routes declaration

app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

app.use("/api/banner", bannerRouter);

export { app };
