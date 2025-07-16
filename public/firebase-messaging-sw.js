importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyAhtBoX9Pedoh85f7ClsqbwSfsT2vrqEhQ",
   authDomain: "reminder-bell-next.firebaseapp.com",
  projectId: "reminder-bell-next",
  storageBucket: "reminder-bell-next.firebasestorage.app",
  messagingSenderId: "577281920261",
  appId: "1:577281920261:web:6e5d141240b1cb39e3fb6c",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon: "/icon.png", // optional
  });
});
