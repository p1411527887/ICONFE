import {Button} from "antd";
import {MzFormInput} from "../../components/forms/FormInput.tsx";
import {useForm} from "react-hook-form";
import TableData from "../../components/TableData.tsx";
import {ColumnsType} from "antd/es/table";
import {AnyObject} from "antd/es/_util/type";
import createColumn from "../../utils/createColumn.ts";

const Index = () => {
    const { control} = useForm();

    const columns:ColumnsType<AnyObject>=[
        createColumn("#","index"),
        createColumn("Tên","name"),
        createColumn("Ảnh đại diện","avatar"),
        createColumn("Hình ảnh xe","image"),
        createColumn("Biển số xe",""),
        createColumn("Mô tả xe",""),
        createColumn("Loại xe",""),
        createColumn("Số chỗ ngồi",""),
        createColumn("Giấy đăng ký xe",""),
        createColumn("Bằng lái xe",""),
        createColumn("Trạng thái",""),
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
                x={1700}
                y={400}
                tableProps={{
                    rowKey: 'id',
                    columns
                }}/>
        </div>
    );
};

export default Index;