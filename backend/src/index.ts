import express from "express";
import cors from 'cors';
import { Request, Response } from "express"; 
import { config } from "dotenv";
import { healthRouter } from "./routes/health.route";

config(); // loads .env
const app = express();

app.use(express.json());
app.use(cors());
app.use("/health", healthRouter);

// 404 fallback
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express with TypeScript!');
});

app.get('/Api_test', (req: Request, res: Response) => {
  res.send('Worked')
});

app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: "Not found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API → http://localhost:${PORT}`));
