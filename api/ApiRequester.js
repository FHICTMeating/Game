import axios from 'axios';

const BASE_PATH = "http://localhost:8080/api/";

class ApiRequester {

    constructor(path_extension) {
        const PATH = BASE_PATH + path_extension; 
    }

    Get() {
        return axios({
			method: 'GET',
			url: PATH,
			//withCredentials: true,
			headers: {
				'Cache-Control': 'no-cache',
				'Pragma': 'no-cache',
				'Expires': 0,
				'Access-Control-Allow-Origin': '*'
			},
			data: body
		});
    }

    GetDetails(id) {
        return axios({
			method: 'GET',
			url: PATH + id,
			//withCredentials: true,
			headers: {
				'Cache-Control': 'no-cache',
				'Pragma': 'no-cache',
				'Expires': 0,
				'Access-Control-Allow-Origin': '*'
			}
		});
    }

    Post(id, body) {
        return axios({
			method: 'POST',
			url: PATH + id,
			headers: {
				'Cache-Control': 'no-cache',
				'Pragma': 'no-cache',
				'Expires': 0,
				'Access-Control-Allow-Origin': '*'
            },
            data: body
		});
    }

    Put(body){
        return axios({
			method: 'PUT',
			url: PATH,
			headers: {
				'Cache-Control': 'no-cache',
				'Pragma': 'no-cache',
				'Expires': 0,
				'Access-Control-Allow-Origin': '*'
            },
            data: body
		});
    }

    delete(id) {
        return axios({
			method: 'DELETE',
			url: PATH + id,
			headers: {
				'Cache-Control': 'no-cache',
				'Pragma': 'no-cache',
				'Expires': 0,
				'Access-Control-Allow-Origin': '*'
			}
		});
    }
}

export default ApiRequester;