import { ArrowBackIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../providers/Store";

export const City = observer(() => {
	const router = useRouter();
	const store = useStore();

	return (
		<Box
			height="100vh"
			width="100%"
			bgGradient={`linear(to-t, green, ${store.ui.bgColor}, ${store.ui.bgColor})`}
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
			</Flex>
		</Box>
	);
});
