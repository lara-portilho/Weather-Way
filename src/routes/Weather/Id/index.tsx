import { ArrowBackIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../providers/Store";

export const Id = observer(() => {
	const router = useRouter();
	const store = useStore();

	return (
		<Flex
			height="100vh"
			width="100%"
			justifyContent="center"
			bgGradient={`linear(to-t, green.500, ${store.ui.bgColor}, ${store.ui.bgColor})`}
		>
			<Flex
				justifyContent="space-evenly"
				alignItems="center"
				height="100%"
				maxWidth="500px"
				flexDirection="column"
			>
				<Button
					leftIcon={<ArrowBackIcon boxSize="20px" />}
					backgroundColor="blue.500"
					color="white"
					_hover={{
						backgroundColor: "blue.500",
						color: "white",
						opacity: "0.6",
					}}
					onClick={() => {
						router.push(`/weather`);
					}}
				>
					Nova pesquisa
				</Button>

				<Flex flexDirection="column" marginX="30px">
					<Heading as="h1" fontSize="60">
						{store.name}
					</Heading>
					<Flex>
						<Text fontSize="30">{store.weather.description}</Text>
						<Image
							src={`https://openweathermap.org/img/wn/${store.weather.icon}@2x.png`}
							boxSize="40px"
						/>
					</Flex>
					<Text fontSize="50">{store.weather.temperature} °C</Text>
				</Flex>
				<Flex></Flex>
			</Flex>
		</Flex>
	);
});
