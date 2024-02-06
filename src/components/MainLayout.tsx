import {Avatar, Dropdown, Layout, MenuProps} from "antd";
import {Navigate, Outlet} from "react-router-dom";
import urlPath from "../constants/UrlPath.ts";
import Side from "antd/es/layout/Sider";
import {Content} from "antd/es/layout/layout";
import '../styles/component/MainLayout.scss';
import NavBar from "./NavBar.tsx";
import LayoutSetting from "./LayoutSetting.tsx";
import {sidebarStore} from "../stores/sidebarStore.ts";
import {mainStore} from "../stores/mainStore.ts";
import {BiMenuAltLeft} from "react-icons/bi";
import {BsFullscreen, BsFullscreenExit} from "react-icons/bs";
import {IoIosNotificationsOutline} from "react-icons/io";
import React, {useEffect} from "react";

const items: MenuProps['items'] = [
    {
        key: '1',
        label: 'Bạn nhận được một quần què mới',
    },
];
const MainLayout = () => {

    const [screen, setScreen] = React.useState<boolean>(false);
    const [collapse, setCollapse] = React.useState<boolean>(false);
    const [widthScreen, setWidthScreen] = React.useState<number>(window.innerWidth);

    const {sidebarSrc} = sidebarStore();
    const {mainSrc} = mainStore();

    const returnImage = (value: string) => {
        if (value && value !== "") {
            return {backgroundImage: `url(${value})`}
        } else return {}
    }

    const changeScreen = (value: boolean) => {
        if (value) {
            document.documentElement.requestFullscreen().catch();
        } else {
            document.exitFullscreen().catch();
        }
        setScreen(value)
    }

    useEffect(() => {
        const updateWindowDimensions = () => {
            const width = window.innerWidth;
            setWidthScreen(width)
        };
        window.addEventListener("resize", updateWindowDimensions);
        return () => window.removeEventListener("resize", updateWindowDimensions)

    }, []);

    // const auth = Boolean(sessionStorage.getItem('key'))
    const name = sessionStorage.getItem('name')
    // if (!auth) return <Navigate to={urlPath.LOGIN}/>
    return (
        <>
            <LayoutSetting/>
            <Layout className={"main-layout"}>
                <Side width={230} collapsed={widthScreen < 980 ? false : collapse} className={`main-layout__sidebar ${widthScreen < 980 && collapse ?"view-small-screen":""}`}
                      style={returnImage(sidebarSrc)}>
                    <div className={"main-layout__sidebar__container"}>
                        <NavBar collapse={collapse} widthScreen={widthScreen}/>
                    </div>
                </Side>
                <Layout>
                    <Content style={returnImage(mainSrc)}
                             className={"main-layout__content"}>
                        <div className={"main-layout__content__container"}>
                            <div
                                className={`main-layout__content__container__header ${collapse ? "width-header" : ""}`}>
                                <div className={"main-layout__content__container__header__left"}>
                                    <BiMenuAltLeft onClick={() => setCollapse(!collapse)} size={35}/>
                                </div>
                                <div className={"main-layout__content__container__header__right"}>
                                    <Dropdown menu={{items}} placement="bottomLeft" trigger={['click']}>
                                        <IoIosNotificationsOutline size={28}/>
                                    </Dropdown>
                                    {screen ? <BsFullscreenExit onClick={() => changeScreen(!screen)} size={18}/> :
                                        <BsFullscreen onClick={() => changeScreen(!screen)} size={18}/>}
                                    <Avatar>
                                        {name ?? "Null"}
                                    </Avatar>
                                </div>
                            </div>
                            <div className={"main-layout__content__container__main"}>
                                <Outlet/>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};

export default MainLayout;