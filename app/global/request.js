// REQUEST

globalThis.requestSend = (status, data, message = null) => {
	return { status, message, data };
};
