import * as $app from "firebase/app";
import * as $auth from "firebase/auth";
import * as $firestore from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHbsIFK5wRJb1oKkSTPd2fpSwK9wdwmyA",
  authDomain: "devter-82047.firebaseapp.com",
  projectId: "devter-82047",
  storageBucket: "devter-82047.appspot.com",
  messagingSenderId: "787434140741",
  appId: "1:787434140741:web:3051e2539c73153f8d9f2c",
  measurementId: "G-6R44Z7G1SX",
};

!$app.getApps().length && $app.initializeApp(firebaseConfig);

const db = $firestore.getFirestore();

const auth = $auth.getAuth();

const mapUserFromFirebaseAuth = (user) => {
  const { photoURL, displayName, email, uid } = user;

  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid,
  };
};

export const onAuthStateChanged = (onChange) => {
  return $auth.onAuthStateChanged(auth, (user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuth(user) : null;
    onChange(normalizedUser);
  });
};

export const loginWithGitHub = async () => {
  const githubProvider = new $auth.GithubAuthProvider();
  return $auth.signInWithPopup(auth, githubProvider).then(({ user }) => {
    mapUserFromFirebaseAuth(user);
  });
};

export const addDevit = ({ avatar, content, userId, username }) => {
  return writeDevitCollection({
    avatar,
    content,
    userId,
    username,
    createdAt: $firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,
  });
};

const writeDevitCollection = async (devit) => {
  try {
    return await $firestore.addDoc(
      $firestore.collection(db, "devits"),
      devit
    );
  } catch (error) {
    console.log(error);
  }
};
