import axios from "axios";

const api = axios.create({
	baseURL: `https://api.napster.com/v2.2/`,
	headers: { apikey: "YzYzMTQ0NGMtODY2Ny00MzNhLThhYTYtYTY0ZmRlMTAxN2Qw" },
});

export default api;
