export function removeDefaultValue(data: any) {
    if (data?.createdBy) delete data?.createdBy
    if (data?.createdDate) delete data?.createdDate
    if (data?.updatedBy) delete data?.updatedBy
    if (data?.updatedDate) delete data?.updatedDate
    return data
}