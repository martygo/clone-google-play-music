import axios from "axios";

const api = axios.create({
	baseURL: `https://api.napster.com/v2.2/`,
	headers: { apikey: "ZjdjZmYyYzQtMDRmOC00MGZmLWJiZjMtNjk5MTk2ZTIyN2Ni" },
});

export default api;
