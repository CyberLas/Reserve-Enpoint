import { db } from "..";

export const clientAll = async () => {
	return await db
		.manyOrNone(`SELECT * FROM public.client`, [])
		.then((res) => res)
		.catch((err) => err);
};

export const clientFilter = async (filter, info) => {
	let query = "";
	switch (filter) {
		case "dni":
		{
			query = `SELECT * FROM public.client WHERE dni LIKE $1`;
			info = `%${info}%`;
		}
		break;
		case "first":
		{
			query = `SELECT * FROM public.client WHERE first LIKE $1`;
		}
		break;
		case "last":
		{
			query = `SELECT * FROM public.client WHERE last LIKE $1`;
		}
		break;
	}

	return await db
		.manyOrNone(query, [info])
		.then((res) => res)
		.catch((err) => err);
};
