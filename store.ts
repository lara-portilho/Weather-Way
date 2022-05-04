import { Instance, types } from "mobx-state-tree";

const WeatherModel = types.model("Weather", {
	main: types.string,
	description: types.string,
	id: types.number,
	icon: types.string,
	color: types.string,
});

interface IWeatherModel extends Instance<typeof WeatherModel> {}
const CityModel = types
	.model("City", {
		name: types.string,
		weather: WeatherModel,
	})
	.actions((self) => ({
		changeCity(newName: string, newWeather: IWeatherModel) {
			self.name = newName;
			self.weather = newWeather;
		},
	}));

interface IStore extends Instance<typeof CityModel> {}
let _store: IStore;

export const useStore = () => {
	if (!_store) {
		_store = CityModel.create({
			name: "",
			weather: {
				main: "",
				description: "",
				id: 0,
				icon: "",
				color: "",
			},
		});
	}

	return _store;
};
