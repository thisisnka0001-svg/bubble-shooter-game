import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

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

        alert("Account Created Successfully 🎉");

        window.location.href="index.html";

    }catch(error){

        alert(error.message);

    }

});
