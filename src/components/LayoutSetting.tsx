import {useEffect, useState} from "react";
import "../styles/component/LayoutSetting.scss";
import {AiOutlineSetting, AiFillCloseCircle} from "react-icons/ai";
import {BsChevronCompactRight} from "react-icons/bs";
import createArray from "../utils/createArray.ts";
import listSidebarImage from "../assets/sidebar-bg-image/exportListSidebarImage.ts";
import listMainImage from "../assets/main-bg-image/exportListMainImage.ts";
import {sidebarStore} from "../stores/sidebarStore.ts";
import {mainStore} from "../stores/mainStore.ts";

const listColor = [
    "", "orange", "pink", "cerulean blue", "purple", "yellow", "green", "deep pink", "laurel green", "avocado"
]
const listTheme = [
    "", "light", "dark"
]
const Themes = [
    "Blue", "Light", "Dark"
]
const LayoutSetting = () => {

    const themStore = localStorage.getItem("theme") ?? "";
    const colorStore = localStorage.getItem("color") ?? "";
    const sidebarSrc = localStorage.getItem("sidebar") ?? "";
    const main = localStorage.getItem("main") ?? "";

    const {setSidebarSrc} = sidebarStore();
    const {setMainSrc} = mainStore();

    const [theme, setTheme] = useState<string>(themStore)
    const [color, setColor] = useState<string>(colorStore)
    const [activeSetting, setActiveSetting] = useState<boolean>(false);

    const toggleSetting = () => {
        setActiveSetting(!activeSetting);
    }

    const changeColor = (value: string) => {
        const htmlRoot = document.getElementById('super-root');
        if (htmlRoot) {
            htmlRoot.setAttribute('data-color', value);
            localStorage.setItem("color", value)
            setColor(value)
        }
    }

    const changeTheme = (value: string) => {
        const htmlRoot = document.getElementById('super-root');
        if (htmlRoot) {
            htmlRoot.setAttribute('data-theme', value);
            localStorage.setItem("theme", value)
            setTheme(value)
        }
    }

    const changeSideBar = (value: string) => {
        setSidebarSrc(value)
        localStorage.setItem("sidebar", value);
    }

    const changeMain = (value: string) => {
        setMainSrc(value)
        localStorage.setItem("main", value);
    }

    useEffect(() => {
        const htmlRoot = document.getElementById('super-root');
        if (themStore !== "") {
            localStorage.setItem("theme", themStore);
            if (htmlRoot) {
                htmlRoot.setAttribute('data-theme', themStore);
            }
        }
        if (colorStore !== "") {
            localStorage.setItem("color", colorStore);
            if (htmlRoot) {
                htmlRoot.setAttribute('data-color', colorStore);
            }
        }
    })

    useEffect(() => {
        setSidebarSrc(sidebarSrc)
        setMainSrc(main)
    }, [sidebarSrc || main])

    return (
        <>
            <div className={`layout-setting ${activeSetting ? "active" : ""}`}>
                <button onClick={toggleSetting} className={"layout-setting__btn-close"}>
                    <BsChevronCompactRight size={20}/>
                </button>
                <div className={"layout-setting__title"}>
                    <h3>Layout Settings</h3>
                </div>
                <div className={"layout-setting__body"}>
                    <div className={"layout-setting__body__primary-color"}>
                        <span className={"layout-setting__body__primary-color__sub-title"}>
                            Primary Color
                        </span>
                        <div className={"layout-setting__body__primary-color__setting-color"}>
                            {createArray(10, 1).map((value) => (
                                <button onClick={() => changeColor(listColor[value - 1])} key={value}
                                        className={`layout-setting__body__primary-color__setting-color__palette-${value} ${listColor[value - 1] === color ? "color-active" : ""}`}>
                                    {createArray(4, 1).map((child) => (
                                        <span key={child}></span>
                                    ))}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className={"layout-setting__body__theme-color"}>
                        <span className={"layout-setting__body__theme-color__sub-title"}>
                            Theme Color
                        </span>
                        <div className={"layout-setting__body__theme-color__setting-theme"}>
                            {createArray(3, 1).map((value) => (
                                <div onClick={() => changeTheme(listTheme[value - 1])}
                                     className={"layout-setting__body__theme-color__setting-theme__col"} key={value}>
                                    <div
                                        className={`layout-setting__body__theme-color__setting-theme__col__item bg-${value} ${listTheme[value - 1] === theme ? "theme-active" : ""}`}>
                                        <div className={`bg-menu ${value === 2 ? "bg-dark-subtle" : ""}`}>
                                            <div className={"rounded-pill"}></div>
                                            {createArray(3, 1).map((child) => (
                                                <div key={child} className={"nav-theme"}></div>
                                            ))}
                                        </div>
                                        <div className={`bg-header-footer${value}`}>
                                            <div className={`bg-header-footer${value}__item`}></div>
                                            <div className={`bg-header-footer${value}__item`}></div>
                                        </div>
                                        <span className={"part-txt"}>{Themes[value - 1]} Theme</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={"layout-setting__body__container-bg"}>
                        <span className={"layout-setting__body__container-bg__sub-title"}>Sidebar Background</span>
                        <div className={"layout-setting__body__container-bg__container-btn"}>
                            <button onClick={() => changeSideBar("")}>
                                <AiFillCloseCircle/>
                            </button>
                            {listSidebarImage.map((item) => (
                                <button onClick={() => changeSideBar(item?.value)} key={item.id}>
                                    <img width={50} height={90} src={item.value} alt={""}/>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className={"layout-setting__body__container-bg "}>
                        <span className={"layout-setting__body__container-bg__sub-title"}>Main Background</span>
                        <div className={"layout-setting__body__container-bg__container-btn main-bg"}>
                            <button onClick={() => changeMain("")}>
                                <AiFillCloseCircle/>
                            </button>
                            {listMainImage.map((item) => (
                                <button onClick={() => changeMain(item?.value)} key={item.id}>
                                    <img width={100} height={60} src={item.value} alt={""}/>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={"btn-active-layout"}>
                <button onClick={toggleSetting}>
                    <AiOutlineSetting color={"#FFFFFF"} size={22}/>
                </button>
            </div>
        </>
    );
};

export default LayoutSetting;