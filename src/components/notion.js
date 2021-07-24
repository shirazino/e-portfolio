export async function ToNotion() {
  var https = require("follow-redirects").https;
  var fs = require("fs");

  var options = {
    method: "GET",
    hostname: "notion-api-teal.vercel.app",
    path: "/add",
    headers: {},
    maxRedirects: 20,
  };

  var req = https.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function (chunk) {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
    });

    res.on("error", function (error) {
      console.error(error);
    });
  });

  req.end();
}

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
    console.log(json);
    return json;
  } catch (error) {
    console.log("error");
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
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}
