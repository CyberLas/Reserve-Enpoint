import { check, oneOf, validationResult } from "express-validator";

import { app } from "./index";
import { hotelAll, hotelFilter } from "../database/query/hotel";
import { clientAll, clientFilter } from "../database/query/client";
import { factureId } from "../database/query/facture";
import {
  reserveCreate,
  reserveUpdate,
  reserveDelete,
} from "../database/query/reserve";

const validateHeader = (endpoint) => {
	return (
		check("Authorization").isIn(["eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"]),
		check("Keep-Alive").isIn(["true"]),
		check("Enpoint").isIn([endpoint])
	);
};

app.get("/hotel", validateHeader("hotel"), async (req, res) => {
	try {
		validationResult(req).throw();
		res.json(requestSend(200, await hotelAll(), "Consulta Satisfactoria"));
	} catch (err) {
		res.status(404).json(requestSend(404, [], "Faltan Parametros"));
	}
});

app.post("/hotel", validateHeader("hotel"), async (req, res) => {
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

app.get("/client", validateHeader("client"), async (req, res) => {
	try {
		validationResult(req).throw();
		res.json(requestSend(200, await clientAll(), "Consulta Satisfactoria"));
	} catch (err) {
		res.status(404).json(requestSend(404, [], "Faltan Parametros"));
	}
});

app.post("/client", validateHeader("client"), async (req, res) => {
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
		res.status(404).json(requestSend(404, [], "Faltan Parametros"));
	}
});

app.post("/facture", validateHeader("facture"), async (req, res) => {
	try {
		validationResult(req).throw();
		let { id } = req.body;
		if (uuidValidate(id))
			return res.json(
				requestSend(200, await factureId(id), "Consulta Satisfactoria")
			);
		res
			.status(400)
			.json(requestSend(400, [], "Parámetros faltante ó inválidos"));
	} catch (err) {
		res.status(404).json(requestSend(404, [], "Faltan Parametros"));
	}
});

app.post("/reserve", validateHeader("reserve"), async (req, res) => {
	try {
		validationResult(req).throw();
		let { paytype, mount, idclient, idhotel, coin, daystay } = req.body;
		if (uuidValidate(idclient) && uuidValidate(idhotel))
			return res.json(
				requestSend(
					200,
					await reserveCreate(
						uuidV1(),
						paytype,
						mount,
						idclient,
						idhotel,
						coin,
						daystay
					),
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

app.put("/reserve", validateHeader("reserve"), async (req, res) => {
	try {
		validationResult(req).throw();
		let { id } = req.body;
		if (uuidValidate(id))
			return res.json(
				requestSend(200, await reserveUpdate(id), "Consulta Actualizada")
			);
		res
			.status(400)
			.json(requestSend(400, [], "Parámetros faltante ó inválidos"));
	} catch (err) {
		res.status(404).json(requestSend(404, [], "Faltan Parametros"));
	}
});

app.delete("/reserve", validateHeader("reserve"), async (req, res) => {
	try {
		validationResult(req).throw();
		let { id } = req.body;
		if (uuidValidate(id))
			return res.json(
				requestSend(200, await reserveDelete(id), "Consulta Actualizada")
			);
		res
			.status(400)
			.json(requestSend(400, [], "Parámetros faltante ó inválidos"));
	} catch (err) {
		res.status(404).json(requestSend(404, [], "Faltan Parametros"));
	}
});

// app.put('/api/reserva', async(req, res) => {
// 	res.send("Hi Wordl")
// })

// app.delete('/api/reserva', async(req, res) => {
// 	res.send("Hi Wordl")
// })
