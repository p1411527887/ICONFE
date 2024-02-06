import axios from 'axios';
import environmentConfig from "./environmentConfig";
import responseStatus from "./responseStatus";

interface ApiParams {
    uri?: string,
    body?: any,
    hasToken?: boolean,
    token?: any,
    isFormUpload?: boolean,
    configRequest?: object
}

export function put(
    {
        uri,
        body,
        hasToken = true,
        token = null,
        isFormUpload = true,
        configRequest
    }: ApiParams
) {
    return call(uri, 'PUT', body, hasToken, token, isFormUpload, configRequest)
}
export function post(
    {
        uri,
        body,
        hasToken = true,
        token = null,
        isFormUpload = true,
        configRequest
    }: ApiParams
) {
    return call(uri, 'POST', body, hasToken, token, isFormUpload, configRequest)
}
export function get(
    {
        uri,
        body,
        hasToken = true,
        token = null,
        isFormUpload = false,
        configRequest
    }: ApiParams
) {
    return call(uri, 'GET', body, hasToken, token, isFormUpload, configRequest)
}

export async function call(uri?: string, method?: 'POST'|'GET'|'PUT'|'DELETE', bodyParameters?: any, hasToken?: boolean, token?: string, isFormUpload = false, configRequest?: object) {
	const url = `${environmentConfig.API_ENVIRONMENT_URL}${uri}`;
	try {
		let auth_token
		if (hasToken) {
			auth_token = sessionStorage.getItem('key');
		}
		if (token) {
			auth_token = token
		}
		let headers = !hasToken ? { 'Content-Type': 'application/json;charset=UTF-8' } :
			{
				'Content-Type': 'application/json;charset=UTF-8',
				'Authorization': `Bearer ${auth_token}`,
				// 'Cookie': Cookies.get('sess'),
			}

		if(isFormUpload) {
			headers = !hasToken ? { 'Content-Type': 'multipart/form-data' } :
				{
					'Content-Type': 'multipart/form-data',
					'Authorization': `Bearer ${auth_token}`,
				}
		}

		let configAxios= {
			url,
			method,
			headers,
			data: bodyParameters,
			timeout: environmentConfig.TIME_OUT,
			// withCredentials: true,
		}
		if(configRequest) configAxios = Object.assign(configAxios, configRequest)

		return new Promise((resolve, reject) => {
			axios(configAxios)
				.then((response) => {
					return resolve(response.data);
				}).catch((error) => {
				const res = error.response
				if(res?.status === 401) {
					if(res.data.message === 'Expired Token') {
						sessionStorage.removeItem('key')
						setTimeout(()=>{
							window.location.reload()
						}, 1000)
					}
				}
				return handleResponseFail(error, reject);
			});
		});
	} catch (error) {
		console.log('Error :' + error);
	}
}

export interface ICommonResponse<T> {
	status: string,
	data: T,
	code: number
}

const handleResponseFail = (error: any, reject: any) => {
	const status = error.response ? error.response.status : error.status
	switch (status) {
		case responseStatus.TOKEN_EXPIRED: return
		case responseStatus.NOT_CONNECT: return
		case responseStatus.FILE_NOT_FOUND: return
		case responseStatus.REQUEST_TIMEOUT:
			return reject(error)
		default:
			return reject(error)
	}
}
