import axios from './http';

const apiUrl = `summary`;

export async function getStatusData() {
	try {
		const { data } = await axios.get(apiUrl);
		return data;
	} catch (error) {
		return error;
	}
}
