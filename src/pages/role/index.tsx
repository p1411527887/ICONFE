import {useForm} from "react-hook-form";
import {ColumnsType} from "antd/es/table";
import {AnyObject} from "antd/es/_util/type";
import createColumn from "../../utils/createColumn.ts";
import {Button, Col, Row} from "antd";
import {MzFormInput} from "../../components/forms/FormInput.tsx";
import TableData from "../../components/TableData.tsx";
import {MzModalBase} from "../../components/ModalBase.tsx";
import {useState} from "react";
import {MzFormDatePicker} from "../../components/forms/FormDatePicker.tsx";
import {MzFormSelect} from "../../components/forms/FormSelect.tsx";


const Index = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const { control} = useForm();

    const columns:ColumnsType<AnyObject>=[
        createColumn("#","index"),
        createColumn("Họ và tên","name"),
        createColumn("Tên tài khoản","avatar"),
        createColumn("Địa chỉ","image"),
        createColumn("Vai trò",""),
        createColumn("Trạng thái",""),
        createColumn("Ngày tham gia",""),
        createColumn("cài đặt",""),
    ]

    return (
        <div className={"driver"}>
            <div className={"driver__filter flex justify-between"}>
                <Button onClick={()=>setOpenModal(!openModal)}>Thêm quản trị viên</Button>
                <div className={"flex"}>
                    <MzFormInput controllerProps={{control, name: "name"}}
                                 inputProps={{placeholder: "Name or user ID", addonAfter: <button>search</button>}}/>
                </div>
            </div>
            <TableData
                x={1700}
                y={400}
                tableProps={{
                    rowKey: 'id',
                    columns
                }}/>
            <MzModalBase contentStyles={{width:500}} title={"Thêm quản trị viên"} open={openModal} setOpen={setOpenModal}>
                <Row gutter={8}>
                    <Col span={12} className={"mt-4"}>
                        <MzFormInput controllerProps={{control,name:"name"}} inputProps={{placeholder: "Nhập họ và tên"}} label={"Họ tên"}/>
                    </Col>
                    <Col span={12} className={"mt-4"}>
                        <MzFormInput controllerProps={{control,name:"username"}} inputProps={{placeholder: "Nhập tên tài khoản"}} label={"Tên tài khoaản"}/>
                    </Col>
                    <Col span={12} className={"mt-4"}>
                        <MzFormInput controllerProps={{control,name:"address"}} inputProps={{placeholder: "Nhập địa chỉ"}} label={"Địa chỉ"}/>
                    </Col>
                    <Col span={12} className={"mt-4"}>
                        <MzFormSelect controllerProps={{control,name:"role"}} label={"Vài trò"}/>
                    </Col>
                    <Col span={12} className={"mt-4"}>
                        <MzFormSelect controllerProps={{control,name:"status"}} label={"Trạng thái"}/>
                    </Col>
                    <Col span={12} className={"mt-4"}>
                        <MzFormDatePicker controllerProps={{control,name:"date"}} label={"Ngày tham gia"}/>
                    </Col>
                </Row>
            </MzModalBase>
        </div>
    );
};

export default Index;