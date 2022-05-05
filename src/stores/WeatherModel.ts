import { Instance, types } from "mobx-state-tree";

export const WeatherModel = types.model({
	main: types.string,
	description: types.string,
	id: types.number,
	icon: types.string,
	temperature: types.number,
});

export interface IWeatherModel extends Instance<typeof WeatherModel> {}
