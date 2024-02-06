import {memo} from 'react';
import {ColProps, Form, Select, SelectProps} from "antd";
import {FieldValues, useController, UseControllerProps} from "react-hook-form";

type FormSelectProps = {
	controllerProps: UseControllerProps<FieldValues, any>,
	label?: string,
	labelCol?: ColProps | undefined,
	selectProps?: SelectProps,
}
function FormSelect ({controllerProps, label, labelCol = {span: 24}, selectProps}: FormSelectProps) {

	const {field, fieldState} = useController(controllerProps)

	const {error} = fieldState;

	const { onBlur, onChange, value } = field;

	return (
		<Form.Item
			labelCol={labelCol}
			label={label}
			validateStatus={error && "error"}
			help={error && error.message}
		>
			<Select
				onChange={onChange}
				onBlur={onBlur}
				value={value}
				{...selectProps}
			/>
		</Form.Item>
	)
}

FormSelect.displayName = 'FormSelect'
export const MzFormSelect = memo(FormSelect);
