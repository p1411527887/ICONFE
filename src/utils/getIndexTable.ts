export default function getIndexTable(currentPage:number, index:number, size = 25) {
    index += 1
    if (currentPage !== 1) {
        return index + (currentPage - 1) * size
    }
    return index
}