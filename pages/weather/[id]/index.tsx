import { observer } from "mobx-react-lite";
import { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";
import { useStore } from "src/providers/Store";
import { Id } from "src/routes/Weather/Id";
import { getHttpClient } from "src/services/httpClient";
import { WeatherService } from "src/services/WeatherService";
import { IWeatherModel } from "src/stores/WeatherModel";

type IdPageProps = {
	name: string;
	weather: IWeatherModel;
};

const IdPage: NextPage<IdPageProps> = observer(({ name, weather }) => {
	const store = useStore();

	useEffect(() => {
		store.changeCity(name, weather);
	}, []);

	return <Id />;
});

export default IdPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { sm, id, country } = ctx.query;

	const weatherService = new WeatherService(getHttpClient("next"));
	const { name, weather } = await weatherService.getWeather(
		sm as string,
		id as string,
		country as string
	);

	return { props: { name, weather } };
};
