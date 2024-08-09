"use strict";

import 'dotenv/config'

import express from "express";
import mongoose from "mongoose";
import router from "./router.ts";

const PORT = process.env.SERVER_PORT;
const app = express();
app.use(express.json());
app.use("/api", router);

// Endpoints
app.get("/", (req, res) => {
	res.status(200).json("Server is working");
});

// Start script
async function startApp() {
	try {
		await mongoose.connect(process.env.MONGODB_URL as string);
		console.log(
			"Pinged your deployment. You successfully connected to MongoDB!",
		);
		app.listen(PORT, () => console.log("Server started on port: " + PORT));
	} catch (e) {
		console.log(e);
	}
}

startApp();

export { app };
