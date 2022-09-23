import { db } from "..";

export const reserveCreate = async (
	id,
	paytype,
	mount,
	idclient,
	idhotel,
	coin,
	daystay
) => {
	return await db
		.oneOrNone(
			`INSERT INTO public.facture(id, paytype, mount, idclient, idhotel, coin, daystay, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING*`,
			[id, paytype, mount, idclient, idhotel, coin, daystay, "pendient"]
		)
		.then((res) => res)
		.catch((err) => err);
};

export const reserveUpdate = async (id) => {
	return await db
		.oneOrNone(
			`UPDATE public.facture SET status=$1, updated=now(), pay=$2 WHERE id=$3 RETURNING*`,
			["paid", true, id]
		)
		.then((res) => res)
		.catch((err) => err);
};

export const reserveDelete = async (id) => {
	return await db
		.oneOrNone(
			`UPDATE public.facture SET status=$1, updated=now() WHERE id=$2 RETURNING*`,
			["removed", id]
		)
		.then((res) => res)
		.catch((err) => err);
};
