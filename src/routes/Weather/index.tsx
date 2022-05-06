import { useFormContext } from "react-hook-form";
import { useRouter } from "next/router";
import { Button, Box, Flex, Image, Radio, Stack } from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";
//import { RHRadio } from "src/components/RHRadio";
import { RHInputText } from "src/components/RHInputText";
import { RHSelect } from "src/components/RHSelect";
import { useState } from "react";

import { CRadioGroup } from "src/components/CRadioGroup";

type FormData = {
	city: string;
};

export const Weather = () => {
	const { handleSubmit } = useFormContext<FormData>();

	const [radio, setRadio] = useState("zip");

	const router = useRouter();
	const onSubmit = (data: FormData) => {
		//router.push(`/weather/${data.city}`);
		console.log(data);
	};

	const countryCodes = [
		{ value: "BR", label: "Brasil" },
		{ value: "US", label: "Estados Unidos" },
	];

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
				<CRadioGroup
					name="searchMethod"
					value={radio}
					onChange={setRadio}
				>
					<Stack>
						<Radio isChecked value="zip">
							Código
						</Radio>
						<Radio value="city">Cidade</Radio>
					</Stack>
				</CRadioGroup>

				<RHInputText
					name="city"
					label="Cidade"
					marginBottom="20px"
					backgroundColor="white"
				/>
				<RHInputText
					name="zip"
					label="Código Postal"
					marginBottom="20px"
					backgroundColor="white"
				/>
				<RHSelect
					name="country"
					selectOptions={countryCodes}
					label="País"
					marginBottom="20px"
					backgroundColor="white"
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
					leftIcon={<SearchIcon />}
				>
					Pesquisar
				</Button>
			</Box>

			<Image
				src="./logo-way-data-solution-vertical-azul.png"
				boxSize="150px"
				marginY="20px"
			/>
		</Flex>
	);
};
