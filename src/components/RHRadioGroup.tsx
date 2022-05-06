import { Controller } from "react-hook-form";
import { CRadioGroup, CRadioGroupProps } from "./CRadioGroup";

export type RHRadioGroupProps = CRadioGroupProps & {
	name: string;
};

export const RHRadioGroup = ({
	name,
	children,
	...props
}: RHRadioGroupProps) => {
	return (
		<Controller
			name={name}
			render={({ field, fieldState: { error } }) => {
				return (
					<CRadioGroup {...props} {...field} error={error?.message}>
						{children}
					</CRadioGroup>
				);
			}}
		/>
	);
};
