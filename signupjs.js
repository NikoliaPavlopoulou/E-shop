function submitForm() {

    var password = document.getElementById("password").value;
    var cPassword = document.getElementById("confirm-password").value;
    var message = document.getElementById("message");
    var username = document.getElementById("username").value;
    var usernameMessage = document.getElementById("username-message");
    var name = document.getElementById("name").value;
    var nameMessage = document.getElementById("name-message");
    var email = document.getElementById("email").value;
    var emailMessage = document.getElementById("email-message");

    var hasErrors = false; // Variable to track if there are any errors

    if(password.length < 8) {  
        message.textContent = "**Ο κωδικός θα πρέπει να αποτελείται απο τουλάχιστον 8 χαρακτήρες";
        message.style.color = "red";
        hasErrors = true;
        
        
    }else{
        if (password === cPassword) {
            message.textContent = "**Ο κωδικός εγκρίθηκε";
            message.style.color = "green";
        }else {
            message.textContent = "**Λανθασμένος κωδικός";
            message.style.color = "red";
            hasErrors = true;
        }
    
    }
    if (username === "") {
        usernameMessage.textContent = "**Το όνομα χρήστη δεν μπορεί να είναι κενό";
        usernameMessage.style.color = "red";
        hasErrors = true;
    } else {
        usernameMessage.textContent = "**Αποδεκτό όνομα χρήστη";
        usernameMessage.style.color = "green";
    }

    if (name===""){
        nameMessage.textContent = "**Το ονοματεπώνυμο δεν μπορεί να είναι κενό"
        nameMessage.style.color="red";
        hasErrors = true;
    }
    if (email===""){
        emailMessage.textContent = "**Το E-mail δεν μπορεί να είναι κενό"
        emailMessage.style.color="red";
        hasErrors = true;
    }
      
  


    var telephone = document.getElementById("telephone").value;
    var message = document.getElementById("tel-message");
    if(telephone.length !== 10) {  
        
        message.textContent = "**Λανθασμένος αριθμός τηλεφώνου";
        message.style.color = "red";
        hasErrors = true;
    }else{
        message.textContent = "**Το τηλέφωνο σας καταχωρήθηκε";
        message.style.color = "green";

    }

    if (!hasErrors) {
        alert("Form submitted successfully!");
    }
    else{
        alert("Form has errors, please correct the fields!");
    }

}
