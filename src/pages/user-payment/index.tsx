import {useForm} from "react-hook-form";
import {ColumnsType} from "antd/es/table";
import {AnyObject} from "antd/es/_util/type";
import createColumn from "../../utils/createColumn.ts";
import {Button} from "antd";
import {MzFormInput} from "../../components/forms/FormInput.tsx";
import TableData from "../../components/TableData.tsx";


const Index = () => {
    const { control} = useForm();

    const columns:ColumnsType<AnyObject>=[
        createColumn("#","index"),
        createColumn("Họ tên khách hàng","name"),
        createColumn("Email","id"),
        createColumn("Số điện thoại","userName"),
        createColumn("ID người dùng","phone"),
        createColumn("Phương thức thanh toán","email"),
        createColumn("Số tiền nạp","address"),
        createColumn("Mã giao dịch",""),
        createColumn("Trạng thái giao dịch","setting"),
        createColumn("Địa chỉ IP nạp","setting"),
        createColumn("Mã xác minh (OTP)","setting"),
        createColumn("Thời gian giao dịch","setting"),
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
                x={2600}
                y={400}
                tableProps={{
                    rowKey: 'id',
                    columns
                }}/>
        </div>
    );
};

export default Index;