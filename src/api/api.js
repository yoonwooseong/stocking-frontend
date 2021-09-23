// API TEST javascript 
import axios from "axios";

function testAPI(){
    const url = 'https://api.finance.naver.com/service/itemSummary.nhn';
    const params = new URLSearchParams();
    params.append('itemcode', '005930');

    return axios.post(url, params);
}

// API
const axiosService = axios.create({
    baseURL:'http://52.78.111.36:8080',
});

function searchAssets(params){
    return axiosService.post('/asset/myasset', params);
}

export { testAPI, searchAssets };