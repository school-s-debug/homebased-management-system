document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("tenantForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const phone1 = document.getElementById("phone1").value.trim();
        const idnumber = document.getElementById("idnumber").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmpassword").value;
        const error = document.getElementById("error");
       // const successpopup = document.getElementById("successpopup").style.display="flex";
        




        error.style.color = "red";

        if (email === "" || phone1 === "" || idnumber === "" || password === "" || confirmPassword === "") {
           alert("please fill in all the filleds!")
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            error.textContent = "Enter a valid email address.";
            return;
        }

        if (phone1.length < 10) {
            error.textContent = "Phone number must be at least 10 digits.";
            return;

            
        }

        if (idnumber.length < 6) {
            error.textContent = "Enter a valid ID number.";
            return;
        }

        if (password.length < 6) {
            error.textContent = "Password must be at least 6 characters.";
            return;
        }
        if (!password.includes("@")) {
            error.textContent = "Password must be at least 6 characters.";
            error.style.color = "red";
            return;
}

        if (password !== confirmPassword) {
            alert( "Passwords do not match.");
            return;
        }
    document.getElementById("successPopup").style.display = "flex";

 

       

       // error.style.color = "green";
       // error.textContent = "Validation successful. Processing login...";

        
        // Example redirect
        // window.location.href = "tenant-dashboard.html";
    });
});
function showSuccess() {
    document.getElementById("successPopup").style.display = "flex";
}

function closeSuccess() {
    document.getElementById("successPopup").style.display = "none";
}



document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

         const email = document.getElementById("email").value.trim();
        
        const idnumber = document.getElementById("idnumber").value.trim();
        const password = document.getElementById("password").value;
       
        const error = document.getElementById("error");

         if (email === "" || idnumber === "" || password === "" ) {
         error.textContent = "Please fill in all above filleds.";
         error.style.color = "red";
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            error.textContent = "Enter a valid email address.";
            return;
        }
          if (idnumber.length < 6) {
            error.textContent = "Enter a valid ID number.";
            return;
          }
        if (password.length < 6) {
            error.textContent = "Password must be at least 6 characters.";
            error.style.color = "red";
            return;
        }

        document.getElementById("successPopup").style.display = "flex";


         });
});
function closeSuccess() {
    document.getElementById("successPopup").style.display = "none";
}
