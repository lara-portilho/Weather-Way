import { useFormContext, useWatch } from "react-hook-form";
import { useRouter } from "next/router";
import { Button, Box, Flex, Image, Radio, Stack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { SearchCityHelper } from "src/forms/helpers/SearchCityHelper";
import { RHRadioGroup } from "src/components/RHRadioGroup";
import { RHInputText } from "src/components/RHInputText";
import { RHSelect } from "src/components/RHSelect";
import { CountryService } from "src/services/CountryService";
import { getHttpClient } from "src/services/httpClient";
import { useEffect, useState } from "react";

type CountryCodes = {
	value: string;
	label: string;
};

type FormData = {
	searchMethod: string;
	city?: string;
	zip?: string;
	country: string;
};

export const Weather = () => {
	const { handleSubmit } = useFormContext<FormData>();
	const [countryCodes, setCountryCodes] = useState<CountryCodes[]>();
	const router = useRouter();
	const countryService = new CountryService(getHttpClient("next"));

	const searchMethod = useWatch({ name: "searchMethod" });
	const onSubmit = (data: FormData) => {
		router.push(
			`/weather/${data.city || data.zip}?sm=${
				data.searchMethod
			}&country=${data.country}`
		);
	};

	useEffect(() => {
		const getCountryCodes = async () => {
			let arr: CountryCodes[] = [];
			const data = await countryService.getCountries();
			data.forEach((c: any) => {
				const code = Object.entries(c)[1][1];
				const country: CountryCodes = {
					value: code as string,
					label: c.name,
				};

				arr.push(country);
			});
			setCountryCodes(arr);
		};

		getCountryCodes();
	}, []);

	return (
		<Flex
			justifyContent="center"
			alignItems="center"
			height="100vh"
			width="100%"
			bgGradient="linear(to-t, green.500, white, white)"
			flexDirection="column"
		>
			<Box as="form" onSubmit={handleSubmit(onSubmit)} marginX="20px">
				<RHRadioGroup
					name="searchMethod"
					marginBottom="20px"
					label="Pesquisar por:"
				>
					<Stack>
						<Radio isChecked value="zip">
							Código
						</Radio>
						<Radio value="city">Cidade</Radio>
					</Stack>
				</RHRadioGroup>

				<Box marginBottom="20px">
					{searchMethod === "zip" ? (
						<RHInputText
							name="zip"
							label="Código Postal"
							backgroundColor="white"
						/>
					) : (
						<RHInputText
							name="city"
							label="Cidade"
							backgroundColor="white"
						/>
					)}
				</Box>

				<RHSelect
					name="country"
					selectOptions={countryCodes || []}
					label="País"
					backgroundColor="white"
					marginBottom="20px"
				/>

				<Button
					type="submit"
					backgroundColor="blue.500"
					color="white"
					_hover={{
						backgroundColor: "blue.500",
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
