import {CSSProperties, Dispatch, memo, PropsWithChildren, SetStateAction} from "react";
import "../styles/component/ModalBase.scss";
import {Button} from "antd";

type ModalBase = PropsWithChildren<{
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
    onCloseRequest?: (() => void),
    contentStyles?: CSSProperties,
    title?: string,
}>
const ModalBase = ({
                       open,
                       setOpen,
                       onCloseRequest,
                       contentStyles,
                       children,
                       title
                   }: ModalBase) => {

    if(!open) return null;

    const onHandleClose = () => {
        if(onCloseRequest) onCloseRequest()
        setOpen((prevState) => !prevState)
    }

    return (
        <>
            <div className={'modal-base'}>
                <div style={contentStyles} className="modal-content">
                    <div className="modal-header">
                        <p>{title}</p>
                    </div>
                    <div className="modal-main">
                        {children}
                    </div>
                    <div className="modal-footer">
                        <Button className="bg-danger" onClick={onHandleClose}>Đóng</Button>
                    </div>
                </div>
            </div>
        </>
    );
};

ModalBase.displayName = "ModalBase"
export const MzModalBase = memo(ModalBase)