import {useState} from "react";
import {useForm} from "react-hook-form";
import {ColumnsType} from "antd/es/table";
import {AnyObject} from "antd/es/_util/type";
import createColumn from "../../utils/createColumn.ts";
import {Button, Col, Row} from "antd";
import {MzFormInput} from "../../components/forms/FormInput.tsx";
import TableData from "../../components/TableData.tsx";
import {MzModalBase} from "../../components/ModalBase.tsx";
import {CheckCircleTwoTone} from "@ant-design/icons";


const Index = () => {
    const [openModal, setOpenModal] = useState<boolean>(true);
    const { control} = useForm();

    const columns:ColumnsType<AnyObject>=[
        createColumn("#","index"),
        createColumn("Tên","name"),
        createColumn("Điểm xuất phát","id"),
        createColumn("Điểm đến","userName"),
        createColumn("Ngày đặt xe","phone"),
        createColumn("Thời gian","email"),
        createColumn("Tên tài xế","address"),
        createColumn("Loại xe",""),
        createColumn("Trạng thái","setting",{render: () => <Button onClick={() => setOpenModal(true)}>Chi tiết người dùng</Button>}),
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
                        Nguyễn Ngọc Minh Trí
                    </Col>
                    <Col span={12}>
                        tringuyenst
                    </Col>
                    <Col span={12} className={"mt-4"}>
                        <label>
                            <b>Điểm xuất phát</b>
                        </label>
                        <p className={"mt-2"}>123 Hoàng Hoa Thám, phường 13, quận Tân Bình.</p>
                    </Col>
                    <Col span={12} className={"mt-4"}>
                        <label>
                            <b>Điểm đến</b>
                        </label>
                        <p className={"mt-2"}>456 Hoàng Hoa Thám, phường 13, quận Tân Bình.</p>
                    </Col>
                    <Col span={12} className={"mt-4"}>
                        <label>
                            <b>Thời gian đặt xe</b>
                        </label>
                        <p className={"mt-2"}>15:30</p>
                    </Col>
                    <Col span={12} className={"mt-4"}>
                        <label>
                            <b>Ngày đặt xe</b>
                        </label>
                        <p className={"mt-2"}>23/11/2023</p>
                    </Col>
                    <Col span={12} className={"mt-4"}>
                        <label>
                            <b>Tên tài xế</b>
                        </label>
                        <p className={"mt-2"}>Lê Anh Khoa</p>
                    </Col>
                    <Col span={12} className={"mt-4"}>
                        <label>
                            <b>Loại xe</b>
                        </label>
                        <p className={"mt-2"}>Car</p>
                    </Col>
                    <Col span={12} className={"mt-4"}>
                        <label>
                            <b>Tình trạng</b>
                        </label>
                        <p className={"mt-2"}><CheckCircleTwoTone twoToneColor="#52c41a"/> Hoàn thành</p>
                    </Col>
                </Row>
            </MzModalBase>
        </div>
    );
};

export default Index;