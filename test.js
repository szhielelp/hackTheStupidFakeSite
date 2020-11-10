const fetch = require('node-fetch');
const GBK = require('./gbk');

const encode = (s) => GBK.URI.encodeURI(s);

// const times = 1;

const hack = () => {
  const currentDate = new Date();
  const trueDate = currentDate.getMonth() + 1;

  let not3num = '';
  for (let i = 0; i < 3; i += 1) {
    not3num += Math.floor(Math.random() * 10);
  }

  const orderID = `no.${currentDate.getFullYear()}${trueDate}${currentDate.getDate()}${currentDate.getHours()}${currentDate.getMinutes()}${currentDate.getSeconds()}${not3num}`;

  console.log('orderID: ', orderID);
  const url = `https://v.cjpin.com/notorder.asp?${[
    ['orderid', orderID],
    ['cname', 'K001'],
    ['goodname', encode('智能扫拖机器人')],
    ['product', encode('扫地机器人188元')],
    ['mun', '1'],
    ['name', 'testtest'],
    ['mob', '13400000000'],
    ['province', encode('智能扫拖机器人')],
    ['city', encode('河北省')],
    ['area', encode('我乱写个你也能接受对吧')],
    ['address', encode('天堂')],
    ['zfbprice', '188'],
    ['ycjf', '1380'],
    ['price', '188'],
    ['pay', 'wxpay'],
    ['guest', ''],
    [
      'fromurl',
      'https%3A%2F%2Fv.cjpin.com%2Forder%2Fpay.asp%3Forder_no%3D2020119223126028%26mob%3D13400000000%26nowurl%3Dhttps%3A%2F%2Fv.cjpin.com%2FK001.htm',
    ],
    ['nowurl', 'https%3A%2F%2Fv.cjpin.com%2FK001.htm'],
    ['keyword', ''],
    ['gzid', ''],
    ['submit', ''],
    ['tltime', '46'],
  ]
    .map((line) => `${line[0]}=${encodeURI(line[1])}`)
    .join('&')}`;

  console.log('url: ', url);

  fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'text/html',
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

hack();
// setInterval(hack, 5000);

// let x = 1;
// while (1) {
//   console.log(++x);
//   hack();
// }
