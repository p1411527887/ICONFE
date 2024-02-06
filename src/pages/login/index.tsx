import {Button, Form, Input} from 'antd';
import './styles.scss';
import {call, ICommonResponse} from "../../apis/baseRequest.ts";
import {toast} from "react-toastify";
import {Navigate, useNavigate} from "react-router-dom";
import urlPath from "../../constants/UrlPath.ts";
import getMessageError from "../../utils/getMessageError.ts";

const Index = () => {
    const navigate = useNavigate();
    const auth = Boolean(sessionStorage.getItem('key'))
    if (auth){
        return <Navigate to={urlPath.DASHBOARD}/>
    }
    const onFinish = async (values: any) => {
        try {
            const response = await call('auth/signin',"POST",values) as ICommonResponse<any>
            sessionStorage.setItem('name',response.data?.name);
            sessionStorage.setItem('key',response.data.token)
            toast('Đăng nhập thành công',{type:'success'})
            navigate(urlPath.DASHBOARD,{replace:true})
        }catch (e){
            toast(getMessageError(e),{type:'error'})
        }
    };

    type FieldType = {
        username?: string;
        password?: string;
    };
    return (
        <div className={"page-login"}>
            <div className={"page-login__form-login"}>
                <h2>Login</h2>
                <Form
                    className={"page-login__form-login__form"}
                    name="basic"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 16}}
                    style={{maxWidth: 600}}
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        className={"page-login__form-login__form__field"}
                        label="Tài khoản"
                        name="username"
                        rules={[{required: true, message: 'Vui lòng nhập username!'}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item<FieldType>
                        className={"page-login__form-login__form__field"}
                        label="Mật khẩu"
                        name="password"
                        rules={[{required: true, message: 'Vui lòng nhập password!'}]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item
                        className={"page-login__form-login__form__btn-submit"}
                        wrapperCol={{offset: 8, span: 16}}>
                        <Button type="primary" htmlType="submit">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <p>Submit</p>
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Index;