import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBU5S5xMSdAYpFiqBuw6mLy28qMBb9glxs",
  authDomain: "testproject-d60da.firebaseapp.com",
  projectId: "testproject-d60da",
  storageBucket: "testproject-d60da.appspot.com",

  messagingSenderId: "66935403395",
  appId: "1:66935403395:web:8b8c982dc2037dbbaa3cb6",
};

const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);

export default app;
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// // Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: process.env.apiKey,
//   authDomain: process.env.authDomain,
//   projectId: process.env.projectId,
//   storageBucket: process.env.storageBucket,
//   messagingSenderId: process.env.messagingSenderId,
//   appId: process.env.appId,
// };

// const app = initializeApp(firebaseConfig);
// // const db = getDatabase(
// //   app,
// //   "https://socialmedia-3d13e-default-rtdb.firebaseio.com/contact"
// // );
// const db = getFirestore(app);
// export default db;
