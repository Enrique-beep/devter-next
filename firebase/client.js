import * as firebase from "firebase";

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

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

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
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuth(user): null;

    onChange(normalizedUser);
  });
};

export const loginWithGitHub = async () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(githubProvider);
};

export const addDevit = ({ avatar, content, img, userId, username }) => {
  return db.collection("devits").add({
    avatar,
    content,
    img,
    userId,
    username,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,  
  });
};

export const fetchLatestDevits = async () => {
  return db
    .collection("devits")
    .orderBy("createdAt", "desc")
    .get()
    .then(({ docs }) => {
      return docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        const { createdAt } = data;

        return {
          ...data,
          id,
          createdAt: +createdAt.toDate(),
        };
      });
    })
    .catch((err) => console.log(err));  
};

export const uploadImage = (file) => {
  const ref = firebase.storage().ref(`images/${file.name}`);
  const task = ref.put(file);
  return task;
}
