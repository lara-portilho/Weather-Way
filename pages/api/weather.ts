import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		let response;

		if (req.query.searchMethod === "city") {
			const responseLocal = await axios.get(
				`http://api.openweathermap.org/geo/1.0/direct?q=${req.query.id},${req.query.country}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&lang=pt_br&units=metric`
			);

			response = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?lat=${responseLocal.data[0].lat}&lon=${responseLocal.data[0].lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&lang=pt_br&units=metric`
			);
		} else {
			const responseLocal = await axios.get(
				`http://api.openweathermap.org/geo/1.0/zip?zip=${req.query.id},${req.query.country}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&lang=pt_br&units=metric`
			);

			response = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?lat=${responseLocal.data.lat}&lon=${responseLocal.data.lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&lang=pt_br&units=metric`
			);
		}

		res.status(response.status).json(response.data);
	} catch (err) {
		console.log(err);
	}
}
