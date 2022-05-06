import {
	Box,
	FormControl,
	FormErrorMessage,
	FormLabel,
	forwardRef,
	Input,
	InputProps,
} from "@chakra-ui/react";

export type CInputTextProps = InputProps & {
	error?: string;
	label?: string;
	isRequired?: boolean;
};

export const CInputText = forwardRef<CInputTextProps, "input">(
	({ error = "", label, isRequired, ...props }, ref) => {
		return (
			<FormControl isRequired={isRequired} isInvalid={!!error}>
				<FormLabel>{label}</FormLabel>
				<Box>
					<Input {...props} ref={ref} />
					<FormErrorMessage>{error}</FormErrorMessage>
				</Box>
			</FormControl>
		);
	}
);
