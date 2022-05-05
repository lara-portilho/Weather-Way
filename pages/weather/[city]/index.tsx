import { observer } from "mobx-react-lite";
import { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";
import { useStore } from "src/providers/Store";
import { City } from "src/routes/Weather/City";
import { getHttpClient } from "src/services/httpClient";
import { WeatherService } from "src/services/WeatherService";
import { IUiModel } from "src/stores/UiModel";
import { IWeatherModel } from "src/stores/WeatherModel";

type CityPageProps = {
	city: string;
	weather: IWeatherModel;
};

const CityPage: NextPage<CityPageProps> = observer(({ city, weather }) => {
	const store = useStore();

	useEffect(() => {
		store.changeCity(city, weather);
	}, []);

	return <City />;
});

export default CityPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { city } = ctx.query;
	const weatherService = new WeatherService(getHttpClient("next"));

	const weather = await weatherService.getWeather(city as string);
	return { props: { city, weather } };
};
