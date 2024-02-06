import React from 'react';
import type {MenuProps} from 'antd';
import {Button, Menu} from 'antd';
import {Link, useNavigate} from "react-router-dom";
import urlPath from "../constants/UrlPath.ts";
import '../styles/component/NavBar.scss'
import {BiLogOut} from "react-icons/bi";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: 'group',): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Trang chủ', urlPath.DASHBOARD,),
    getItem('Driver','0',<></>,[
        getItem('Danh sách driver',urlPath.DRIVER),
    ]),
    getItem('User','1',<></>,[
        getItem('Thông tin cá nhân',urlPath.USER),
        getItem('Chuyến book',urlPath.BOOK_CAR),
    ]),
    getItem('Chuyến đi','2',<></>,[
        getItem('Chuyến đi đã match',urlPath.TRIP_WAS_MATCHED),
        getItem('Chuyến đi đã hủy',urlPath.TRIP_WAS_CANCELED),
    ]),
    getItem('Thanh toán','3',<></>,[
        getItem('Lịch sử nạp (USER)',urlPath.USER_PAYMENT),
        getItem('Lịch sử rút (DRIVER)',urlPath.DRIVER_PAYMENT),
    ]),
    getItem('Quản lý chi phí nền tảng', urlPath.MANAGE_PLATFORM_COSTS,),
    getItem('Quản lý phân quyền', urlPath.ROLES,),
];

interface PropsNavBar {
    collapse?: boolean;
    widthScreen: number;
}

const NavBar = ({collapse, widthScreen}: PropsNavBar) => {
    const navigate = useNavigate()
    const onSelectChange: MenuProps['onClick'] = (e) => {
        navigate(e.key)
    };
    const onLogoutAccount = () => {
        sessionStorage.removeItem('key')
        navigate(urlPath.LOGIN, {replace: true})
    }
    return (
        <div className={"nav-bar"}>
            <div className={"nav-bar__logo"}>
                {widthScreen > 980 ?
                    <Link to={urlPath.DASHBOARD}>
                        Booking
                    </Link>
                    : <></>
                }
            </div>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode={"inline"}
                className={"nav-bar__main-item"}
                items={items}
                onClick={onSelectChange}
            />
            <Button onClick={onLogoutAccount} className={"nav-bar__btn-logout"} type={"primary"} danger>
                {collapse ? <BiLogOut size={20}/> : "Đăng xuất"}
            </Button>
        </div>
    );
};

export default NavBar;