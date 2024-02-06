import {memo} from 'react';
import {ColProps, Form, DatePicker, DatePickerProps} from "antd";
import {FieldValues, useController, UseControllerProps} from "react-hook-form";

type FormDatePickerProps = {
	controllerProps: UseControllerProps<FieldValues, any>,
	label?: string,
	labelCol?: ColProps | undefined,
	datepickerProps?: DatePickerProps,
}
function FormDatePicker ({controllerProps, label, labelCol = {span: 24}, datepickerProps}: FormDatePickerProps) {

	const {field, fieldState} = useController(controllerProps)

	const {error} = fieldState;

	const { onChange, value } = field;

	return (
		<Form.Item
			labelCol={labelCol}
			label={label}
			validateStatus={error && "error"}
			help={error && error.message}
		>
			<DatePicker
				onChange={onChange}
				value={value}
				format={'DD-MM-YYYY'}
				{...datepickerProps}
			/>
		</Form.Item>
	)
}

FormDatePicker.displayName = 'FormDatePicker'
export const MzFormDatePicker = memo(FormDatePicker);
