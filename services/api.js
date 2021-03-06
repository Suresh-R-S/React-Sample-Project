import axios from 'axios';

const BASE_URL = 'https://randomuser.me/api/';

export function getCall(params=null){
	return axios.get(BASE_URL,{params : params});
}

export function putCall(url,body){
	return axios.put(BASE_URL+url,body);
}

export function postCall(url,body){
	return axios.post(BASE_URL+url,body);
}

export function deleteCall(url,params=null){
	return axios.delete(BASE_URL+url,{params : params});
}
