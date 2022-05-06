import { useFormContext, useWatch } from "react-hook-form";
import { useRouter } from "next/router";
import {
	Button,
	Box,
	Flex,
	Image,
	Radio,
	Stack,
	useDisclosure,
	Fade,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { RHRadioGroup } from "src/components/RHRadioGroup";
import { RHInputText } from "src/components/RHInputText";
import { RHSelect } from "src/components/RHSelect";

type FormData = {
	searchMethod: string;
	city?: string;
	zip?: string;
	county: string;
};

export const Weather = () => {
	const { handleSubmit } = useFormContext<FormData>();
	const router = useRouter();
	const { isOpen, onToggle } = useDisclosure();
	const searchMethod = useWatch({ name: "searchMethod" });
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
			bgGradient="linear(to-t, green.500, white, white)"
			flexDirection="column"
		>
			<Box as="form" onSubmit={handleSubmit(onSubmit)}>
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

				{searchMethod === "zip" ? (
					<RHInputText
						name="zip"
						label="Código Postal"
						marginBottom="20px"
						backgroundColor="white"
					/>
				) : (
					<RHInputText
						name="city"
						label="Cidade"
						marginBottom="20px"
						backgroundColor="white"
					/>
				)}

				<RHSelect
					name="country"
					selectOptions={countryCodes}
					label="País"
					marginBottom="20px"
					backgroundColor="white"
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
