import axios, { AxiosResponse } from 'axios'

const API_URL = process.env.API_BASE_URL
const url = (route: string) => `${API_URL}/${route}`

export async function get(path: string, config?: any): Promise<AxiosResponse> {
	return axios
		.get(url(path), config)
		.then((res: any) => res.data)
		.catch((err: any) => {
			throw err
		})
}

export async function post(path: string, data?: any): Promise<AxiosResponse> {
	return axios
		.post(url(path), data)
		.then((res: any) => res.data)
		.catch((err: any) => {
			throw err
		})
}
