import { ArrowBackIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { observer } from "mobx-react-lite";
import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { useStore } from "../../store";

type CityProps = {
	city: string;
	data: any;
};

const City = observer(({ data }: CityProps) => {
	const city = useStore();
	const router = useRouter();

	useEffect(() => {
		const id = data.weather[0].id;
		let color;

		if (id === 800) {
			color = "sky.900";
		} else {
			id;
			color = `sky.${id - (id % 100)}`;
		}

		const newWeather = {
			main: data.weather[0].main,
			description: data.weather[0].description,
			id: data.weather[0].id,
			icon: data.weather[0].icon,
			color: color,
		};
		city.changeCity(data.name, newWeather);
	}, []);

	return (
		<Box
			height="100vh"
			width="100%"
			bgGradient={`linear(to-t, green, ${city.weather.color}, ${city.weather.color})`}
		>
			<Flex
				justifyContent="space-evenly"
				alignItems="center"
				height="50%"
				width="100%"
				flexDirection="column"
			>
				<Button
					leftIcon={<ArrowBackIcon boxSize="20px" />}
					backgroundColor="blue"
					color="white"
					_hover={{
						backgroundColor: "blue",
						color: "white",
						opacity: "0.6",
					}}
					onClick={() => {
						router.push(`/weather`);
					}}
				>
					Nova pesquisa
				</Button>

				<Flex
					flexDirection="column"
					alignSelf="baseline"
					marginX="30px"
				>
					<Heading as="h1" fontSize="60">
						{city.name}
					</Heading>
					<Flex>
						<Text fontSize="30">{city.weather.description}</Text>
						<Image
							src={`https://openweathermap.org/img/wn/${city.weather.icon}@2x.png`}
							boxSize="40px"
						/>
					</Flex>
				</Flex>
			</Flex>
		</Box>
	);
});

export default City;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { city } = ctx.query;
	const { data } = await axios.get(`http://localhost:3000/api/weather`, {
		params: {
			city,
		},
	});

	return { props: { data } };
};
