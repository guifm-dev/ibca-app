# IBCA App [Deprecated]

## Key Highlights

- Cross-platform mobile app built with React Native and Expo
- Firebase Auth/Firestore integration for member data workflows
- Push notification support with Expo Notifications
- Offline-friendly local persistence with AsyncStorage
- Event tracking, goals, and member engagement management

## The Problem

Community teams need a reliable way to organize events, track member engagement, and keep important information accessible during day-to-day activities. The challenge is building a community management tool that works offline and syncs member data reliably, while still being simple enough to use on mobile devices.

## The Solution

IBCA App is a cross-platform mobile solution for tracking events and member engagement. It combines calendar-based planning, member records, goal tracking, Firebase-backed data storage, and local persistence so the app can remain useful even when connectivity is limited.

## Technologies

- React Native
- Expo
- Firebase Auth
- Firebase Firestore
- Firebase Storage
- Expo Notifications
- React Navigation
- AsyncStorage
- React Native Calendars

## How to Run

### Prerequisites

- Node.js installed
- npm installed
- Expo CLI available through `npx`
- A Firebase project configured for the app

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd ibca-app
```

2. Install dependencies:

```bash
npm install
```

3. Configure Firebase:

Update `firebase-app.js` with your Firebase project credentials:

```js
const firebaseApp = firebase.initializeApp({
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  databaseURL: "your-database-url",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
});
```

4. Start the development server:

```bash
npm start
```

5. Run on a target platform:

```bash
npm run android
npm run ios
npm run web
```

