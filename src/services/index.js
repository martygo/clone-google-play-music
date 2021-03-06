import axios from "axios";

const api = axios.create({
	baseURL: `https://api.napster.com/v2.2/`,
	headers: { apikey: "aqui vai a sua api do napster " },
});

export default api;
