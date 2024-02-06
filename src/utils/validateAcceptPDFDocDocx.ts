export function validateFile(value: any) {
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (value.length === 0) {
        return "Hãy chọn một tệp.";
    }
    const file = value;
    if (!allowedTypes.includes(file.type) || !file.type || !file) {
        return "Chỉ cho phép tệp pdf, doc hoặc docx.";
    }

    return true;
}