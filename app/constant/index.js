import 'dotenv/config'

// DATA SERVER
export const PORT = process.env.PORT
export const URL = process.env.URL

// CREDENTIALS POSTGRESQL DATABASE
export const POSTGRESHOST = process.env.POSTGRESHOST
export const POSTGRESPORT = process.env.POSTGRESPORT
export const POSTGRESNAME = process.env.POSTGRESNAME
export const POSTGRESUSER = process.env.POSTGRESUSER
export const POSTGRESPASS = process.env.POSTGRESPASS

// DEVELOPMENT
export const DEV = JSON.parse(process.env.DEV)