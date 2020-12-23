import axios from "axios";

const BASE_URL = "http://172.81.241.236:8802";
const TimeOut = 30000;
const esAxios = (url, params = {}, method = "GET", headers = {}) => {
  // let token = localStorage.getItem("token") || "";
  headers = Object.assign(
    {
      // "x-auth-token": token,
      "x-ma-c": "bU7srRL5zR37of8w40ZrSEb92cRXR4Dy",
    },
    headers
  );
  url = BASE_URL + url;
  method = method.toUpperCase();

  if (method === "GET" && Object.keys(params).length > 0) {
    url += "?" + toExcString(params);
  } else if (
    headers["Content-Type"] === "application/x-www-form-urlencoded" &&
    Object.keys(params).length > 0
  ) {
    params = toExcString(params);
  }
  axios.interceptors.response.use((response) => {
    //axios拦截器
    if (response.status === 200) {
      //响应成功后
      if (response.headers["Authorization"]) {
        //   //获取响应头里面的数据，**Authorization根据你响应头里面的数据获取，并不是唯一值**
        console.log(
          "object :>> ",
          response.data,
          response.headers["Authorization"].split(";")[1].split("=")[1]
        );
      }
      console.log("response.headers :>> ", response.headers);
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  });
  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      data: method === "GET" ? {} : params,
      headers,
      timeout: TimeOut,
      withCredentials: true,
    })
      .then((result) => {
        if (result.status === 200) {
          if (result.data.code === 50040) {
            localStorage.setItem("token", "");
            window.location.replace(
              "https://" + window.location.host + "/auth"
            );
          } else {
            resolve(result);
          }
        } else {
          reject(result);
        }
      })
      .catch((error) => {
        console.log(error);
        reject({
          msg: "网络异常，请重试",
        });
      });
  });
};

const toExcString = function(array) {
  let result = "";
  for (var temp in array) {
    if (array[temp] instanceof Object) {
      result += temp + "=" + encodeURI(JSON.stringify(array[temp])) + "&";
    } else {
      result += temp + "=" + encodeURI(array[temp]) + "&";
    }
  }
  return result.substring(-1, result.length - 1);
};

export default esAxios;
