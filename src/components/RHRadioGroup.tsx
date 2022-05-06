import { useFormContext, get, useForm } from "react-hook-form";
import { CRadioGroup, CRadioGroupProps, RadioOptions } from "./CRadioGroup";

export type RHRadioGroupProps = CRadioGroupProps & {
	name: string;
};

export const RHRadioGroup = ({ name, ...props }: RHRadioGroupProps) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<CRadioGroup
			{...props}
			{...register(name)}
			error={get(errors, name)?.message}
		/>
	);
};
