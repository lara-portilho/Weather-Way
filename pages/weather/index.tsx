import { NextPage } from "next";
import { FormProvider, useForm } from "react-hook-form";
import { searchCityHelper } from "src/forms/helpers/SearchCityHelper";
import { Weather } from "src/routes/Weather";
import { yupResolver } from "@hookform/resolvers/yup";

const WeatherPage: NextPage = () => {
	const form = useForm({
		defaultValues: searchCityHelper.initialValues,
		resolver: yupResolver(searchCityHelper.validationSchema),
	});

	return (
		<FormProvider {...form}>
			<Weather />
		</FormProvider>
	);
};

export default WeatherPage;
