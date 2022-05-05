import { Instance, types, getRoot } from "mobx-state-tree";

export const UiModel = types.model().views((self) => ({
	get bgColor() {
		const store = getRoot(self) as any;

		const id = store.weather.id;
		let color;

		if (id === 800) {
			color = "sky.900";
		} else {
			id;
			color = `sky.${id - (id % 100)}`;
		}

		return color;
	},
}));

export interface IUiModel extends Instance<typeof UiModel> {}
