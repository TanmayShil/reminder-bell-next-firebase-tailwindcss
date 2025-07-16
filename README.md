# 🔔 Reminder Bell

A simple browser-based task reminder app built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Firebase Cloud Messaging (FCM)**. Users can set quick reminders and receive push notifications in their browser.

---

## 🚀 Features

- ⏰ Set reminders for tasks with a custom delay
- 🔔 Browser push notifications using Firebase Cloud Messaging
- 📱 Responsive UI styled with Tailwind CSS
- 🔐 Handles notification permissions and browser support checks

---

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/) (Auth, Messaging)
- [VAPID Key Push Notification](https://firebase.google.com/docs/cloud-messaging/js/client)

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/TanmayShil/reminder-bell-next-firebase-tailwindcss.git
cd reminder-bell
```
---

## 2. Install dependencies
```bash
npm install
```
---

## 3. Set up Firebase
- Go to Firebase Console
- Create a project and enable Cloud Messaging
- Go to Project Settings > Cloud Messaging and:
  - Generate a Web Push certificate key pair (VAPID key)
  - Copy the public VAPID key

---


