import {Empty, Table} from "antd";
import './styles.scss'
import {CSSProperties, ReactNode, PropsWithChildren, useEffect} from "react";
import type {TableProps} from 'antd/es/table';

type TableDataProps = PropsWithChildren<{
    footerComponent?: ReactNode,
    styleFooter?: CSSProperties,
    tableProps?: TableProps<any>,
    x?: number,
    y?: number
}>
const TableData = ({footerComponent, styleFooter, children, tableProps, x = 1500, y = 300}: TableDataProps) => {
    useEffect(() => {
        const sliders = document.querySelector("thead.ant-table-thead tr");
        const bodies = document.querySelectorAll(".ant-table-container .ant-table-body"); // Sử dụng querySelectorAll

        const bodyArray = Array.from(bodies);

        let isDown = false;
        let startX: number | null = null;
        let scrollLeft: number | null = null;

        if (sliders && bodyArray.length > 0) {
            bodyArray.forEach((body) => {
                body.addEventListener("mousedown", (e) => {
                    isDown = true;
                    body.classList.add("active-scroll");
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    startX = e.pageX - body.offsetLeft;
                    scrollLeft = body.scrollLeft;
                });
                body.addEventListener("mouseleave", () => {
                    isDown = false;
                    body.classList.remove("active-scroll");
                });
                body.addEventListener("mouseup", () => {
                    isDown = false;
                    body.classList.remove("active-scroll");
                });
                body.addEventListener("mousemove", (e) => {
                    if (!isDown) return;
                    e.preventDefault();
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    const x = e.pageX - body.offsetLeft;
                    const walk = (x - startX!) * 2;
                    body.scrollLeft = scrollLeft! - walk;
                });
            });
        }
    }, []);

    return (
        <div className={'wrap-table-data'}>
            <Table
                scroll={{x: x, y: y}}
                pagination={false}
                {...tableProps}
                locale={{emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'Chưa có dữ liệu'}/>}}
            >
                {children}
            </Table>
            {footerComponent && (
                <div className={'wrap-table-data__footer'} style={styleFooter}>
                    {footerComponent}
                </div>
            )}
        </div>
    );
};

export default TableData;