import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const response = await axios.get(
			`http://api.openweathermap.org/geo/1.0/direct?q=${"London"}&appid=${
				process.env.NEXT_PUBLIC_WEATHER_API_KEY
			}`
		);
		// const response = await axios.get(
		// 	`https://api.openweathermap.org/data/2.5/weather?lat=${responseLocal.data.lat}&lon=${responseLocal.data.lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
		// );
		res.status(response.status).json(response.data);
	} catch (err) {
		console.log(err);
	}
}
