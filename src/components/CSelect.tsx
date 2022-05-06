import {
	Box,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Select,
	forwardRef,
	SelectProps,
} from "@chakra-ui/react";

export type SelectOptions = {
	value: any;
	label: string;
};

export type CSelectProps = SelectProps & {
	error?: string;
	label?: string;
	selectOptions: SelectOptions[];
	isRequired?: boolean;
};

export const CSelect = forwardRef<CSelectProps, "select">(
	({ error = "", label, selectOptions, isRequired, ...props }, ref) => {
		return (
			<FormControl isRequired={isRequired} isInvalid={!!error}>
				<FormLabel>{label}</FormLabel>
				<Box>
					<Select {...props} ref={ref}>
						{selectOptions.map((option, index) => (
							<option key={index} value={option.value}>
								{option.label}
							</option>
						))}
					</Select>
					<FormErrorMessage>{error}</FormErrorMessage>
				</Box>
			</FormControl>
		);
	}
);
