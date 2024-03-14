import { connectToDatabase } from "./db/dbConnection.js";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.js";

const port = 5000;
const app = express();
dotenv.config();

//* middlewares
app.use(cors());
app.use(express.json());

/* Routes */
app.use("/api", userRoutes);

//* database connection
connectToDatabase()
  .then(() => {
    app.listen(port, () =>
      console.log(`server running on port: ${port}`)
    );
  })
  .catch((error) => console.log(error));
