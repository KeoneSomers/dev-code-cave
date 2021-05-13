import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDt0YLf5BZUFyIwFhdFE5n9rBi14iBgSHs",
  authDomain: "codecave-6f040.firebaseapp.com",
  projectId: "codecave-6f040",
  storageBucket: "codecave-6f040.appspot.com",
  messagingSenderId: "263589621919",
  appId: "1:263589621919:web:4f0ada545240ab7fb8f2aa",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
