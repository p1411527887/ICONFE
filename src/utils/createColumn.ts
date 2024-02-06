const createColumn = (title: string, dataIndex: string, rest?: any) => {
    return Object.assign({title, align: "center", dataIndex, key: dataIndex}, rest)
}
export default createColumn