import {Button, Col, Row} from "antd";
import {MzFormInput} from "../../components/forms/FormInput.tsx";
import {useForm} from "react-hook-form";
import {EditOutlined} from "@ant-design/icons";


const Index = () => {
    const {control} = useForm();
    return (
        <Row justify={"space-between"} gutter={50}>
            <Col span={24}>
                <p>Quản lý chi phí nền tảng cho ứng dụng chạy xe yêu cầu thu thập và theo dõi nhiều thông tin quan trọng
                    để đảm bảo tính minh bạch, công bằng và hiệu quả trong quản lý tài chính.</p>
            </Col>
            <Col span={10} className={"mt-4"}>
                <MzFormInput controllerProps={{control,name:""}} label={"Phí hoa hồng (phí dịch vụ)"}/>
                <span>Phí hoa hồng hoặc chi phí dịch vụ mà nền tảng thu được từ mỗi chuyến đi.</span>
            </Col>
            <Col span={10} className={"mt-4"}>
                <MzFormInput controllerProps={{control,name:""}} label={"Phí chi sẻ chi phí"}/>
                <span>Chi phí được chia sẻ giữa tài xế và nền tảng.</span>
            </Col>
            <Col span={10} className={"mt-4"}>
                <MzFormInput controllerProps={{control,name:""}} label={"Chi phí xử  lý thanh toán"}/>
                <span>Chi phí liên quan đến việc xử lý thanh toán từ người dùng đến tài xế và ngược lại.</span>
            </Col>
            <Col span={10} className={"mt-4"}>
                <MzFormInput controllerProps={{control,name:""}} label={"Phí bảo hiểm"}/>
                <span>Chi phí liên quan đến bảo hiểm cho tài xế và phương tiện giao thông.</span>
            </Col>
            <Col span={10} className={"mt-4"}>
                <MzFormInput controllerProps={{control,name:""}} label={"Chi phí duy trì phương tiện"}/>
                <span>Chi phí liên quan đến bảo dưỡng, xăng, và các yếu tố khác của phương tiện giao thông.</span>
            </Col>
            <Col span={10} className={"mt-4"}>
                <MzFormInput controllerProps={{control,name:""}} label={"Thuế và nghĩa vụ thuế"}/>
                <span>Chi phí liên quan đến nghĩa vụ thuế của tài xế và nền tảng.</span>
            </Col>
            <Col span={10} className={"mt-4"}>
                <MzFormInput controllerProps={{control,name:""}} label={"Quy đổi điểm"}/>
                <span>Khi quy đổi điểm, quản trị viên sẽ quy định mức điểm mỗi khi user nạp tiền hoặc khi giao dịch đó diễn ra thành công.</span>
            </Col>
            <div className={"w-full flex justify-center mt-10"}>
                <Button icon={<EditOutlined />}>Chỉnh sửa mức phí</Button>
            </div>
        </Row>
    );
};

export default Index;