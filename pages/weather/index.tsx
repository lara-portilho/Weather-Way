import { NextPage } from "next";
import { FormProvider, useForm } from "react-hook-form";
import { Weather } from "src/routes/Weather";

const WeatherPage: NextPage = () => {
	const form = useForm();

	return (
		<FormProvider {...form}>
			<Weather />
		</FormProvider>
	);
};

export default WeatherPage;
