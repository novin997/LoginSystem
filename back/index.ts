import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());
