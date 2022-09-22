import { db } from '..'

export const hotelAll = async() => {
	return await db
		.manyOrNone(`SELECT * FROM scheme.hotel`, [])
		.then((res) => res)
		.catch((err) => err)
}

export const hotelFilter = async(filter, info) => {
	let query = ''
	switch(filter){
		case 'place':
			{
				query = `SELECT * FROM scheme.hotel WHERE place LIKE $1`
				info = `%${info}%`
			}
		break;
		case 'roomnumber':
			{
				query = `SELECT * FROM scheme.hotel WHERE roomnumber=$1`
			}
		break;
		case 'hotelstars':
			{
				query = `SELECT * FROM scheme.hotel WHERE hotelstars=$1`
			}
		break;
		case 'qualification':
			{
				query = `SELECT * FROM scheme.hotel WHERE qualification=$1`
			}
		break;
		case 'price':
			{
				query = `SELECT * FROM scheme.hotel WHERE price=$1`
			}
		break;
	}
	
	return await db
				.manyOrNone(query, [info])
				.then((res) => res)
				.catch((err) => err)
}

