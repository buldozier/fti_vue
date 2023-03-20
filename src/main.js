import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// import { getStorage } from "firebase/storage";
// import { initializeApp } from "firebase/app";
//
// const storage = getStorage(
//   initializeApp({
//     apiKey: "AIzaSyB3dZEIJ42s-fRPFJbJYIZzk1mbw4l5Xrw",
//     authDomain: "ftibase.firebaseapp.com",
//     projectId: "ftibase",
//     storageBucket: "ftibase.appspot.com",
//     messagingSenderId: "367495808531",
//     appId: "1:367495808531:web:4ad9d1900f9c493cc561e6",
//   })
// );

createApp(App).use(store).use(router).mount("#app");
