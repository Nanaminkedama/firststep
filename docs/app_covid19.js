// axiosライブラリを呼び出す
const axios = require('axios');

// 実際にデータを取得する getRequest 関数
async function getRequest() {
  try {
    const response = await axios.get(`https://api.covid19api.com/summary`);
    var TC = response.data.Global.TotalConfirmed
    console.log('TotalConfirmed:' + TC);
   // console.log(response.data.Countries);
  } catch (error) {
    console.error(error);
  }
}

// getRequest を呼び出してデータを読み込む
getRequest();