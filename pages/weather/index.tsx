import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import {
	FormErrorMessage,
	FormLabel,
	FormControl,
	Input,
	Button,
} from "@chakra-ui/react";

type FormData = {
	city: string;
};

export default function Weather() {
	const { register, handleSubmit } = useForm<FormData>({
		defaultValues: { city: "" },
	});
	const router = useRouter();
	const onSubmit = (data: FormData) => {
		router.push(`/weather/${data.city}`);
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register("city")} />
				<input type="submit" />
			</form>
		</>
	);
}
