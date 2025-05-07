import express from "express";
import { config } from "dotenv";
import { healthRouter } from "./routes/health.route";

config(); // loads .env
const app = express();

app.use(express.json());
app.use("/health", healthRouter);

// 404 fallback
app.use((_req, res) => res.status(404).json({ message: "Not found" }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API → http://localhost:${PORT}`));
