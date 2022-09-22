import { db } from '..'

export const factureId = async() => {
	return await db
		.manyOrNone(`SELECT * FROM scheme.client`, [])
		.then((res) => res)
		.catch((err) => err)
}

export const factureFilter = async(filter, info) => {
	let query = ''
	switch(filter){
		case 'paytype':
			{
				query = `SELECT * FROM scheme.facture WHERE paytype = $1 `
			}
		break
		case 'mount':
			{
				query = `SELECT * FROM scheme.facture WHERE mount = $1 `
			}
		break
		case 'coin':
			{
				query = `SELECT * FROM scheme.facture WHERE coin = $1 `
			}
		break
		case 'daystatus':
			{
				query = `SELECT * FROM scheme.facture WHERE daystatus = $1 `
			}
		break
		case 'status':
			{
				query = `SELECT * FROM scheme.facture WHERE status = $1 `
			}
		break
	}
	
	return await db
				.manyOrNone(query, [info])
				.then((res) => res)
				.catch((err) => err)
}

