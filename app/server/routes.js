import { check, oneOf, validationResult, allOf } from 'express-validator'

import { app } from './index'
import { hotelAll, hotelFilter } from '../database/query/hotel'
import { clientAll, clientFilter } from '../database/query/client'

const validateHeader = (
	check("Authorization").isIn(["eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"]),
	check("Keep-Alive").isIn(["true"]),
	check("Enpoint").isIn(["hotel", "client"])
);

app.get("/hotel", validateHeader, async (req, res) => {
	try {
		validationResult(req).throw();
		res.json(requestSend(200, await hotelAll(), "Consulta Satisfactoria"));
	} catch (err) {
		res.status(404).json(requestSend(404, [], "Faltan Parametros"));
	}
});

app.post("/hotel", validateHeader, async (req, res) => {
	try {
		validationResult(req).throw();
		let { filter, info } = req.body;
		if (filter && info && filter.length > 0 && info.length > 0)
			return res.json(
				requestSend(
				200,
				await hotelFilter(filter, info),
				"Consulta Satisfactoria"
				)
			);
		res
			.status(400)
			.json(requestSend(400, [], "Parámetros faltante ó inválidos"));
	} catch (err) {
		res.status(404).json(requestSend(404, [], "Faltan Parametros"));
	}
});

app.get("/client", validateHeader, async (req, res) => {
	try {
		validationResult(req).throw();
		res.json(requestSend(200, await clientAll(), "Consulta Satisfactoria"));
	} catch (err) {
		res.status(404).json(requestSend(404, [], "Faltan Parametros"));
	}
});

app.post("/client", validateHeader, async (req, res) => {
	try {
		validationResult(req).throw();
		let { filter, info } = req.body;
		if (filter && info && filter.length > 0 && info.length > 0)
			return res.json(
				requestSend(
				200,
				await clientFilter(filter, info),
				"Consulta Satisfactoria"
				)
			);
		res
			.status(400)
			.json(requestSend(400, [], "Parámetros faltante ó inválidos"));
	} catch (err) {
		res.status(404).jjson(requestSend(404, [], "Faltan Parametros"));
	}
});

// app.put('/api/reserva', async(req, res) => {
// 	res.send("Hi Wordl")
// })

// app.delete('/api/reserva', async(req, res) => {
// 	res.send("Hi Wordl")
// })