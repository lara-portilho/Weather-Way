import axios, { AxiosInstance } from "axios";

export const baseURL = {
	next: "http://localhost:3000/api",
};

export type IHttpUrl = keyof typeof baseURL;

export type IHttpClient = AxiosInstance;

export const getHttpClient = (urlType: IHttpUrl) => {
	return axios.create({
		baseURL: baseURL[urlType],
	});
};
