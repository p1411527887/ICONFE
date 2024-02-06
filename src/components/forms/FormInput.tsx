import {memo} from 'react';
import {ColProps, Form, Input as AntInput, InputProps} from "antd";
import {FieldValues, useController, UseControllerProps} from "react-hook-form";
import {TextAreaProps} from "antd/es/input";

type FormInputProps = {
	controllerProps: UseControllerProps<FieldValues, any>,
	label?: string,
	labelCol?: ColProps | undefined,
	inputProps?: InputProps,
	textAreaProps?: TextAreaProps,
	inputType?: 'Input' | 'TextArea'
}

const {TextArea} = AntInput
function FormInput ({controllerProps, label, labelCol = {span: 24}, inputProps, textAreaProps, inputType = 'Input'}: FormInputProps) {

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
			{inputType === 'TextArea' ?
				<TextArea
					onChange={onChange}
					onBlur={onBlur}
					value={value}
					{...textAreaProps}
				/>
			:
				<AntInput
					onChange={onChange}
					onBlur={onBlur}
					value={value}
					{...inputProps}
				/>
			}
		</Form.Item>
	)
}

FormInput.displayName = 'FormInput'
export const MzFormInput = memo(FormInput);
