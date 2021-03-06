import { Instance, types } from "mobx-state-tree";
import { UiModel } from "./UiModel";
import { WeatherModel, IWeatherModel } from "./WeatherModel";

export const RootModel = types
	.model("City", {
		name: types.string,
		weather: WeatherModel,
		ui: UiModel,
	})
	.actions((self) => ({
		changeCity(newName: string, newWeather: IWeatherModel) {
			self.name = newName;
			self.weather = newWeather;
		},
	}));

export interface IRootModel extends Instance<typeof RootModel> {}
