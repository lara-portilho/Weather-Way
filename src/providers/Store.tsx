import { IRootModel, RootModel } from "src/stores/RootStore";

let _store: IRootModel;

export const useStore = () => {
	if (!_store) {
		_store = RootModel.create({
			name: "",
			weather: {
				main: "",
				description: "",
				id: 0,
				icon: "",
				temperature: 0,
			},
			ui: {},
		});
	}

	return _store;
};
