import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
  
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
    
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

  function  create() {
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value
    

const auth = getAuth();
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
    
  }

module.create=create    