import * as yup from "yup";
import { Form } from "../interfaces/Form";

export type FormValues = {};

export type Field = {};

export class SearchCityHelper implements Form<FormValues, Field> {
	public validationSchema = yup.object().shape(
		{
			searchMethod: yup.string().required(),
			country: yup.string().required(),
			city: yup.string().when(["zip"], {
				is: (zip: any) => !zip,
				then: yup.string().required("Digite uma cidade"),
			}),

			zip: yup.string().when(["city"], {
				is: (city: any) => !city,
				then: yup.string().required("Digite um código postal"),
			}),
		},
		[["city", "zip"]]
	);

	public initialValues = {
		searchMethod: "zip",
		city: "",
		zip: "",
		country: "BR",
	};
}

export const searchCityHelper = new SearchCityHelper();
