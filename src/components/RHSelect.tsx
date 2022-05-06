import { useFormContext, get, useForm } from "react-hook-form";
import { CSelect, CSelectProps, SelectOptions } from "./CSelect";

export type RHSelectProps = CSelectProps & {
	name: string;
	selectOptions: SelectOptions[];
};

export const RHSelect = ({ name, selectOptions, ...props }: RHSelectProps) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<CSelect
			{...props}
			selectOptions={selectOptions}
			{...register(name)}
			error={get(errors, name)?.message}
		/>
	);
};
