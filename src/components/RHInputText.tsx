import { useFormContext, get, useForm } from "react-hook-form";
import { CInputText, CInputTextProps } from "./CInputText";

export type RHInputTextProps = CInputTextProps & {
	name: string;
};

export const RHInputText = ({ name, ...props }: RHInputTextProps) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<CInputText
			{...props}
			{...register(name)}
			error={get(errors, name)?.message}
		/>
	);
};
