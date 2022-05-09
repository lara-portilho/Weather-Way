import * as yup from "yup";
export interface FormGetRequestBodyPayload {}
export interface FormGetFieldValuesPayload {}

export interface Form<
	FormFields extends Record<string, any>,
	Fields extends Record<string, any>
> {
	validationSchema?: yup.ObjectSchema<any>;
	validationSchemas?: { [key: string]: yup.ObjectSchema<any> };
	initialValues?: FormFields;
	getRequestBody?(
		data: FormFields,
		payload: FormGetRequestBodyPayload
	): Fields;
	getFieldValues?(
		data: Fields,
		payload: FormGetFieldValuesPayload
	): FormFields;
}
