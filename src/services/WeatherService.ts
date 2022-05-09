import { IHttpClient } from "./httpClient";
import { IWeatherModel } from "../stores/WeatherModel";

export class WeatherService {
	constructor(private http: IHttpClient) {}

	public async getWeather(
		searchMethod: string,
		id: string,
		country: string
	): Promise<any> {
		const response = await this.http({
			method: "GET",
			url: "/weather",
			params: {
				searchMethod,
				id,
				country,
			},
		});

		const data = response.data;

		const newWeather: IWeatherModel = {
			main: data.weather[0].main,
			description: data.weather[0].description,
			id: data.weather[0].id,
			icon: data.weather[0].icon,
			temperature: data.main.temp,
		};

		const res = {
			name: data.name,
			weather: newWeather,
		};

		return res;
	}
}
