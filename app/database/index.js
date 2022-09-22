import	pgPromise	from 'pg-promise'
import	{ POSTGRESHOST, POSTGRESPORT, POSTGRESNAME, POSTGRESUSER, POSTGRESPASS } from '../constant'

const pgp	= pgPromise({schema: 'scheme'})

export const db = pgp({
	host					: POSTGRESHOST,
	port					: POSTGRESPORT,
	database				: POSTGRESNAME,
	user					: POSTGRESUSER,
	password				: POSTGRESPASS,
	max						: 30,
	idleTimeoutMillis		: 3600000,
	connectionTimeoutMillis	: 3600000,
})
