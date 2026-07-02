import { auth, db } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  updateProfile
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

import {
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", async () => {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if(name==="" || email==="" || password===""){
        alert("Please fill all fields");
        return;
    }

    try{

        const userCredential = await createUserWithEmailAndPassword(auth,email,password);

        await updateProfile(userCredential.user,{
            displayName:name
        });

        await setDoc(doc(db,"users",userCredential.user.uid),{

            name:name,
            email:email,
            points:0,
            wallet:0,
            role:"user",
            createdAt:new Date()

        });

        alert("Account Created Successfully 🎉");

        window.location.href="index.html";

    }catch(error){

        alert(error.message);

    }

});
