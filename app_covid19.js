
'use strcit';

const axios = require('axios');
const fs = require('fs'); //注: npm i 不要
//const fs_r = require('fs_r'); //注: npm i 不要


//データ更新関数
async function updateData(newData){
    const PATH = './docs/data.json';
    fs.writeFileSync(PATH, JSON.stringify(newData));
}

// 実際にデータを取得する getRequest 関数
async function getRequest() {
  try {
    const response = await axios.get(`https://api.covid19api.com/summary`);
    var TC = response.data.Global.TotalConfirmed
    console.log('TotalConfirmed:' + TC);
   // TC.writeFileSync(PATH, JSON.stringify(newData);
   // console.log(response.data.Countries);
  } catch (error) {
    console.error(error);
  }
}

// getRequest を呼び出してデータを読み込む
getRequest();