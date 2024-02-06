import {useForm} from "react-hook-form";
import {ColumnsType} from "antd/es/table";
import {AnyObject} from "antd/es/_util/type";
import createColumn from "../../utils/createColumn.ts";
import { Button, Col, Row} from "antd";
import {MzFormInput} from "../../components/forms/FormInput.tsx";
import TableData from "../../components/TableData.tsx";
import {MzModalBase} from "../../components/ModalBase.tsx";
import {useState} from "react";


const Index = () => {
    const [openModal, setOpenModal] = useState<boolean>(true);
    const { control} = useForm();

    const columns:ColumnsType<AnyObject>=[
        createColumn("#","index"),
        createColumn("Tên","name"),
        createColumn("Mã ID","id"),
        createColumn("Tên người dùng","userName"),
        createColumn("Số điện thoại","phone"),
        createColumn("Địa chỉ email","email"),
        createColumn("Địa chỉ","address"),
        createColumn("Lần cuối truy cập",""),
        createColumn("Cài đặt","setting",{render: () => <Button onClick={() => setOpenModal(true)}>Chi tiết người dùng</Button>}),
    ]

    return (
        <div className={"driver"}>
            <div className={"driver__filter flex justify-between"}>
                <Button>Xuất file excel</Button>
                <div className={"flex"}>
                    <MzFormInput controllerProps={{control, name: "name"}}
                                 inputProps={{placeholder: "Name or user ID", addonAfter: <button>search</button>}}/>
                </div>
            </div>
            <TableData
                x={1500}
                y={400}
                tableProps={{
                    rowKey: 'id',
                    columns
                }}/>
            <MzModalBase contentStyles={{width:500}} title={"Thông tin chi tiết"} open={openModal} setOpen={setOpenModal}>
                <Row gutter={8}>
                    <Col span={12}>
                        <MzFormInput controllerProps={{control, name: "name"}} inputProps={{placeholder: "Nhập tên"}} label={"Tên"}/>
                    </Col>
                    <Col span={12}>
                        <MzFormInput controllerProps={{control, name: "id"}} inputProps={{placeholder: "Nhập ID"}} label={"ID"}/>
                    </Col>
                    <Col span={12}>
                        <MzFormInput controllerProps={{control, name: "age"}} inputProps={{placeholder: "Nhập tuổi"}} label={"Tuổi"}/>
                    </Col>
                    <Col span={12}>
                        <MzFormInput controllerProps={{control, name: "birthday"}} inputProps={{placeholder: "Nhập năm sinh"}} label={"Năm sinh"}/>
                    </Col>
                    <Col span={24}>
                        <MzFormInput controllerProps={{control, name: "address"}} inputProps={{placeholder: "Nhập địa chỉ liên hệ"}} label={"Địa chỉ"}/>
                    </Col>
                    <Col span={24}>
                        <MzFormInput controllerProps={{control, name: "email"}} inputProps={{placeholder: "Nhập Email"}} label={"Email"}/>
                    </Col>
                    <Col span={24}>
                        <MzFormInput controllerProps={{control, name: "accountNumber"}} inputProps={{placeholder: "Nhập số tài khảon"}} label={"Số tài khoản"}/>
                    </Col>
                </Row>
                <div className={"w-full justify-center flex"}>
                    <Button disabled={true}>Cập nhật</Button>
                </div>
            </MzModalBase>
        </div>
    );
};

export default Index;