import { TuyaContext } from "@tuya/tuya-connector-nodejs";

const tuya = new TuyaContext({
  baseUrl: "https://openapi.tuyaus.com",
  accessKey: "c5y5mrsdt3wwjw9mq8qk",
  secretKey: "c5y5mrsdt3wwjw9mq8qk",
});

tuya.device.list().then((res) => {
  console.log(res);
});
