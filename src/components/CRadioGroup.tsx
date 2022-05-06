import {
	Box,
	FormControl,
	FormErrorMessage,
	FormLabel,
	forwardRef,
	RadioGroup,
	RadioGroupProps,
} from "@chakra-ui/react";

export type RadioOptions = {
	value: any;
	label: string;
};

export type CRadioGroupProps = RadioGroupProps & {
	error?: string;
	label?: string;
	isRequired?: boolean;
	children?: React.ReactNode;
};

export const CRadioGroup = forwardRef<CRadioGroupProps, "div">(
	({ error = "", label, isRequired, children, ...props }, ref) => {
		return (
			<FormControl isRequired={isRequired} isInvalid={!!error}>
				<FormLabel>{label}</FormLabel>
				<Box>
					<RadioGroup {...props} ref={ref}>
						{children}
					</RadioGroup>
					<FormErrorMessage>{error}</FormErrorMessage>
				</Box>
			</FormControl>
		);
	}
);
