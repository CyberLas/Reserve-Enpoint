// GENERATE UUID
import { v4, v1, v3, v5, validate }	from 'uuid'

globalThis.uuidV4 = () => v4

globalThis.uuidV1 = () => v1

globalThis.uuidV3 = () => v3

globalThis.uuidV5 = () => v5

globalThis.uuidValidate = (uuid) => validate(uuid)