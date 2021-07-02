import { stringify } from "qs";
import { extend } from "umi-request";

const codeMessage = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。",
};

const errorHandler = (error) => {
  const { response } = error;

  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;
    console.log(`请求错误 ${status}: ${url},${errorText}`);
    // notification.error({
    //   message: `请求错误 ${status}: ${url}`,
    //   description: errorText,
    // });
  } else if (!response) {
    console.log("网络异常");
    // notification.error({
    //   description: '您的网络发生异常，无法连接服务器',
    //   message: '网络异常',
    // });
    // response.status=500  //测试中
  }

  return response;
};

const request = extend({
  errorHandler,
  requestType: "form",
  // requestType: "json",

  // 默认错误处理
  // credentials: 'include',// 默认请求是否带上cookie
  credentials: "omit",
  headers: {
    // "content-type": "application/json;charset=utf-8",
    "content-Type": "application/x-www-form-urlencoded; charset=utf-8",
  },
});

request.use(async (ctx, next) => {
  const { req } = ctx;
  const { url, options } = req;
  let newUrl = "";
  // let token;
  const token = localStorage.getItem("token");
  // if (newtoken) {
  //   token = newtoken;
  //   if (url.indexOf("?") !== -1) {
  //     // 说明有
  //     newUrl = url + `&token=${token}`;
  //   } else {
  //     newUrl = url + `?token=${token}`;
  //   }
  // } else {
  //   history.push("/login");
  // }

  // if ( url.indexOf('/api') !== 0 ) {
  //   ctx.req.url = `/api/v1/${url}`;
  // }
  // 请求url替换

  let newOptions = { ...options };
  newOptions.headers = {
    ...newOptions.headers,
    authorization: token || "",
  };
  if (options.method === "post") {
    // newOptions.body = JSON.stringify(newOptions.body);
    newOptions.body = stringify({ ...newOptions.body, token: token });
  } else {
    ctx.req.url = url;
  }
  ctx.req.options = {
    ...newOptions,
  };
  await next();

  const { res } = ctx;
  const { success = false } = res;
  if (!success) {
    // ...
  }
});
export default request;
