import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import {
	FormLabel,
	FormControl,
	Input,
	Button,
	Box,
	Flex,
	Image,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";

type FormData = {
	city: string;
};

export const Weather = () => {
	const { register, handleSubmit } = useForm<FormData>({
		defaultValues: { city: "" },
	});
	const router = useRouter();
	const onSubmit = (data: FormData) => {
		router.push(`/weather/${data.city}`);
	};

	return (
		<Flex
			justifyContent="center"
			alignItems="center"
			height="100vh"
			width="100%"
			bgGradient="linear(to-t, green, white, white)"
			flexDirection="column"
		>
			<Box as="form" onSubmit={handleSubmit(onSubmit)}>
				<FormControl isRequired>
					<FormLabel htmlFor="city">Digite uma cidade</FormLabel>
					<Flex as="div">
						<Input
							id="city"
							{...register("city", {
								required: true,
							})}
							backgroundColor="white"
							borderRightRadius="0"
						/>
						<Button
							type="submit"
							backgroundColor="blue"
							color="white"
							_hover={{
								backgroundColor: "blue",
								color: "white",
								opacity: "0.6",
							}}
							borderLeftRadius="0"
						>
							<SearchIcon />
						</Button>
					</Flex>
				</FormControl>
			</Box>

			<Image
				src="./logo-way-data-solution-vertical-azul.png"
				boxSize="150px"
				marginY="20px"
			/>
		</Flex>
	);
};
