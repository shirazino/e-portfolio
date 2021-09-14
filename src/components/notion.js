export async function getIP() {
  require("dotenv").config();
  var axios = require("axios");

  try {
    const response = await axios.get(
      `https://api.ipgeolocation.io/ipgeo?apiKey=ed649e7ecdb54dcfa2d60ad3e049b80c`
    );
    var json = {
      IP: response.data.ip,
      country: response.data.country_name,
      city: response.data.city,
      district: response.data.district,
      coords: `${response.data.latitude} & ${response.data.longitude}`,
      isporg: `${response.data.isp} & ${response.data.organization}`,
      unixtime: response.data.time_zone.current_time_unix,
    };
    return json;
  } catch (error) {
    return "error";
  }
}

export function getTime() {
  const moment = require("moment");
  var currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
  return currentTime;
}

export async function saveData() {
  var axios = require("axios");
  var data = JSON.stringify({
    time: await getTime(),
    IP: JSON.stringify(await getIP()),
  });

  var config = {
    method: "post",
    url: "https://notion-api-teal.vercel.app/data",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

// export default function FetchIntro() {
//   var axios = require("axios");
//   var config = {
//     method: "get",
//     url: "https://notion-api-teal.vercel.app/getblock/914037e1fa8d497c8b153c972eed593e",
//     headers: {},
//   };

//   axios(config)
//     .then(function (response) {
//       return JSON.stringify(response.data);
//     })
//     .catch(function (error) {
//       return error;
//     });
// }
