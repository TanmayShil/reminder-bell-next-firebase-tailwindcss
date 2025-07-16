// import { getToken } from "firebase/messaging";
// import { messaging } from "./firebaseConfig";

// export async function requestPermissionAndToken(): Promise<string | null> {
//   try {
//     const permission = await Notification.requestPermission();
//     if (permission === "granted") {
//       const token = await getToken(messaging, {
//         vapidKey: process.env.NEXT_PUBLIC__WEB_PUSH_CERTIFICATE_KEY_PAIR,
//       });
//       console.log("FCM Token:", token);
//       return token;
//     } else {
//       console.log("Notification permission denied.");
//       return null;
//     }
//   } catch (error) {
//     console.error("FCM token error", error);
//     return null;
//   }
// }


// lib/messaging.ts
import { getToken } from "firebase/messaging";
import { messaging } from "./firebaseConfig";

export async function requestPermissionAndToken(): Promise<string | null> {
  try {
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      if (!messaging) {
        console.warn("Messaging is not available in this environment.");
        return null;
      }

      const token = await getToken(messaging, {
        vapidKey: process.env.NEXT_PUBLIC_WEB_PUSH_CERTIFICATE_KEY_PAIR,
      });

      console.log("FCM Token:", token);
      return token;
    } else {
      console.log("Notification permission denied.");
      return null;
    }
  } catch (error) {
    console.error("FCM token error", error);
    return null;
  }
}
