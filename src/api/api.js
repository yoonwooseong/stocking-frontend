// API TEST javascript 
import axios from "axios";

// function testAPI(){
//     const url = 'https://api.finance.naver.com/service/itemSummary.nhn';
//     const params = new URLSearchParams();
//     params.append('itemcode', '005930');

//     return axios.post(url, params);
// }

// API
const axiosService = axios.create({
    // baseURL:'http://146.56.100.95:8080',
    baseURL: process.env.VUE_APP_API_URL,
});

function searchAssets(params) {
    return axiosService.post('/asset/myasset', params);
}

async function searchStock(name) {
    // const params = new URLSearchParams();
    // params.append('itemcode', name);
    let result;
    try {
        result = await axiosService.get('/stock/' + name + '/');
    } catch (err) {
        console.log(err.message);
    }

    return result;
}

function drawChartData(){
    // const params = new URLSearchParams();
    // params.append('itemcode', name);
    return ["20.12", "21.01", "21.02", "21.03", "21.04", "21.05", "21.06"];
}

export { searchAssets, searchStock, drawChartData };