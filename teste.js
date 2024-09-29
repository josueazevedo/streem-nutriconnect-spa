import { TuyaContext } from "@tuya/tuya-connector-nodejs";

const tuya = new TuyaContext({
  baseUrl: "https://openapi.tuyaus.com",
  accessKey: "c5y5mrsdt3wwjw9mq8qk",
  secretKey: "c5y5mrsdt3wwjw9mq8qk",
});

tuya.device.list().then((res) => {
  console.log(res);
});

// <div class="space-y-4">
//   <!-- Skeleton for a title -->
//   <div class="w-3/4 h-6 bg-gray-300 animate-pulse rounded"></div>

//   <!-- Skeleton for a paragraph -->
//   <div class="w-full h-4 bg-gray-300 animate-pulse rounded"></div>
//   <div class="w-5/6 h-4 bg-gray-300 animate-pulse rounded"></div>

//   <!-- Skeleton for an image or avatar -->
//   <div class="w-24 h-24 bg-gray-300 animate-pulse rounded-full"></div>

//   <!-- Skeleton for a button -->
//   <div class="w-32 h-8 bg-gray-300 animate-pulse rounded"></div>
// </div>
