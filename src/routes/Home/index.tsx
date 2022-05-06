import { Button, Flex, Heading, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const Home = () => {
	const router = useRouter();

	return (
		<Flex
			justifyContent="center"
			alignItems="center"
			height="100vh"
			width="100%"
			bgGradient="linear(to-t, green.500, white, white)"
			flexDirection="column"
		>
			<Heading as="h1">Weather Way</Heading>
			<Button
				backgroundColor="blue.500"
				color="white"
				_hover={{
					backgroundColor: "blue.500",
					color: "white",
					opacity: "0.6",
				}}
				marginY="20px"
				onClick={() => {
					router.push(`/weather`);
				}}
			>
				Pesquise
			</Button>

			<Image
				src="./logo-way-data-solution-vertical-azul.png"
				boxSize="150px"
				marginY="20px"
			/>
		</Flex>
	);
};
