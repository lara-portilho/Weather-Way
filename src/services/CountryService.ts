import { IHttpClient } from "./httpClient";

export class CountryService {
	constructor(private http: IHttpClient) {}

	public async getCountries(): Promise<any> {
		const response = await this.http({
			method: "GET",
			url: "/country",
		});

		const data = response.data;

		return data;
	}
}
