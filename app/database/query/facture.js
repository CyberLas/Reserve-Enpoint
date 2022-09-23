import { db } from "..";

export const factureId = async (id) => {
	return await db
		.oneOrNone(`SELECT * FROM public.facture WHERE id=$1`, [id])
		.then((res) => res)
		.catch((err) => err);
};

export const factureCreate = async (filter, info) => {
	let query = "";
	switch (filter) {
		case "paytype":
		{
			query = `SELECT * FROM public.facture WHERE paytype = $1 `;
		}
		break;
		case "mount":
		{
			query = `SELECT * FROM public.facture WHERE mount = $1 `;
		}
		break;
		case "coin":
		{
			query = `SELECT * FROM public.facture WHERE coin = $1 `;
		}
		break;
		case "daystatus":
		{
			query = `SELECT * FROM public.facture WHERE daystatus = $1 `;
		}
		break;
		case "status":
		{
			query = `SELECT * FROM public.facture WHERE status = $1 `;
		}
		break;
	}

	return await db
		.manyOrNone(query, [info])
		.then((res) => res)
		.catch((err) => err);
};
