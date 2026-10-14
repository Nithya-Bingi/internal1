
  // Import the functions you need from the SDKs you need

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
  import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyARNwSns7OUBcbK7_8VHRZKUmJmFMmoQ1s",
    authDomain: "project4-1c0ae.firebaseapp.com",
    databaseURL: "https://project4-1c0ae-default-rtdb.firebaseio.com",
    projectId: "project4-1c0ae",
    storageBucket: "project4-1c0ae.firebasestorage.app",
    messagingSenderId: "1031041833488",
    appId: "1:1031041833488:web:d6304579ebc0622df5c895"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

window.addStudent = function() {
    let roll = document.getElementById("roll").value.trim();
    let name = document.getElementById("name").value.trim();

    if (roll === "" || name === "") {
        alert("Enter roll number and student name");
        return;
    }

    set(ref(db, "students/" + roll), {
        rollNumber: roll,
        name: name
    })
    .then(() => {
        alert("Student Added Successfully");
    })
    .catch(error => {
        alert("Error: " + error.message);
    });
};