import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-storage.js";
import { getFirestore,addDoc,collection } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js"; 

  const firebaseConfig = {
    apiKey: "AIzaSyAUT01TejAw7ATITIYwrcQAwO-P1ZVqXtc",
    authDomain: "orfarm-a252a.firebaseapp.com",
    projectId: "orfarm-a252a",
    storageBucket: "orfarm-a252a.appspot.com",
    messagingSenderId: "493341039947",
    appId: "1:493341039947:web:85964f5b085de3ee389cce",
    measurementId: "G-K65JCWV8QX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const storage = getStorage();
  const db = getFirestore(app);


  function  create() {
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value
    let file=document.getElementById("file").files[0]
    

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("Account created successfully");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Invaild User");
    // ..
  });
  


const storageRef = ref(storage, email);

// 'file' comes from the Blob or File API
uploadBytes(storageRef, file)
.then((snapshot) => {
  console.log('Uploaded a blob or file!');
  console.log(snapshot);
})
  .catch((error)=>{  
    console.log(error);
  })
  

// Add a new document in collection "cities"
addDoc(collection(db, "cities", "LA"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA"
});

  }

module.create=create    