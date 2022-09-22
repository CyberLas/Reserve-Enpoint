// IMPORT FUNCTION GLOBAL
import '../app/global'
import '../app/server/routes'

// IMPORT LIBRARY 
import { createServer }			from 'http'

// IMPORT SERVICE 
import { app } from './server'
import { PORT, URL } from './constant'

// INITIAL SERVER
const serverApp	= createServer(app)

// SERVER LISTEN
serverApp.listen(PORT, () => {
	logNote(`🚀 RUNNING API http://${URL}:${PORT}`)
}).setTimeout(1000 * 60 * 10)
