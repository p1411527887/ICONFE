import moment from "moment";

export function formatDateWithFormatStr(dateStr: string, format: string) {
	const dateFormatted = moment(dateStr).format(format);
	if (dateFormatted === 'Invalid date')
		return '';
	return dateFormatted;
}
