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
        createColumn("Tên tài xế","name"),
        createColumn("Mã chuyến đi","id"),
        createColumn("Tên khách hàng","userName"),
        createColumn("Thời gian booking","phone"),
        createColumn("Người hủy","email"),
        createColumn("Lý do hủy","address"),
        createColumn("Ngày thực hiện",""),
        createColumn("Trạng thái","setting"),
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
                x={1600}
                y={400}
                tableProps={{
                    rowKey: 'id',
                    columns
                }}/>
        </div>
    );
};

export default Index;