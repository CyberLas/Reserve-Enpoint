// LIBRARY
import morgan from "morgan";
import express from "express";
import bodyParser from "body-parser";

const App = express();

// BODYPARSE
App.use(bodyParser.urlencoded({ extended: true }));
App.use(bodyParser.json());
App.use(bodyParser.raw());

// MORGAN
App.use(
	morgan(
		"  LOG reserve-enpoint ↩️  REQUEST -> :method(:status)  URL -> :url  TIME -> :response-time ms"
	)
);

export const app = App;
