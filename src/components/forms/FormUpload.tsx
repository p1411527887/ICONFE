import {memo} from "react";
import {FieldValues, useController, UseControllerProps} from "react-hook-form";
import {Button, Form, Upload, UploadProps} from "antd";
import {UploadRequestOption as RcCustomRequestOptions} from 'rc-upload/lib/interface';
import {UploadOutlined} from "@ant-design/icons";

type FormUploadProps = {
    controllerProps: UseControllerProps<FieldValues, any>,
    label?: string,
    contentButton?: string
    className?: string,
    uploadProps?: UploadProps
}

function FormUpload({controllerProps, label, className, contentButton, uploadProps}: FormUploadProps) {

    const {field, fieldState} = useController(controllerProps);

    const {error} = fieldState;


    const onHandleUpload = ({file}: RcCustomRequestOptions) => {
        file = file as File
        field.onChange(file)
    }

    return (
        <div style={{margin: "15px 0"}}>
            <h3 className={"title-input-upload"}>{label}</h3>
            <Form.Item
                validateStatus={error && "error"}
                help={error && error.message}
            >
                <Upload
                    maxCount={1}
                    name={"file"}
                    className={className}
                    customRequest={onHandleUpload}
                    {...uploadProps}
                >
                    <Button className={"btn-upload-file w-[100%]"}
                            icon={<UploadOutlined/>}>{contentButton ?? "Click để tải file lên"}</Button>
                </Upload>
            </Form.Item>
        </div>
    )
}

FormUpload.displayName = 'FormUpload'

export const MzFormUpload = memo(FormUpload)