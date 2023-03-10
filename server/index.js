import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import dashboardRoutes from "./routes/dashboard.js";
import personalRoutes from "./routes/personal.js";
import experienceRoutes from "./routes/experience.js";

/* DATA IMPORTS */
import Language from "./models/Language.js";
import { dataLanguage } from "./data/index.js";


/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/dashboard", dashboardRoutes);
app.use("/personal", personalRoutes);
app.use("/experience", experienceRoutes);

/* MONGOOSE */

const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))

    {/* Language.insertMany(dataLanguage); */}

}).catch((error => console.log(`${error} did not connect`)))