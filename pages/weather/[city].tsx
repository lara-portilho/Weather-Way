import axios from "axios";
import { GetServerSideProps } from "next";

type CityProps = {
	city: string;
};

export default function City({ city }: CityProps) {
	return (
		<>
			<h1>{city}</h1>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { city } = ctx.query;
	const { data } = await axios.get(`http://localhost:3000/api/weather`);
	return { props: { data, city } };
};
