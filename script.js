const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

function validateName() {
    const name = document.getElementById("contact-name").value;

    if (name.length === 0){
        nameError.innerHTML ='<i class="fa-solid fa-circle-exclamation" style="color: red;"></i>';
        return false;
    }
    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)){
nameError.innerHTML = '<i class="fa-solid fa-circle-xmark" style="color: red;"></i> Write full name';  
      return false;
    };

    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return  true;
};




function validatePhone() {
    const phone = document.getElementById("contact-phone").value;

    if (phone.length === 0) {
        phoneError.innerHTML = '<i class="fa-solid fa-circle-exclamation" style="color: red;"></i> Phone number is required';
        return false;
    }
    
    if (!phone.match(/^[0-9]{11}$/)) {
        phoneError.innerHTML = '<i class="fa-solid fa-circle-xmark" style="color: red;"></i> Enter a valid phone number';
        return false;
    }


    phoneError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: green;"></i> ';
    return true;
};



function validateEmail() {
    const email = document.getElementById("contact-email").value;

   
    if (email.length === 0) {
        emailError.innerHTML = '<i class="fa-solid fa-circle-exclamation" style="color: orange;"></i> Email is required';
        return false;
    }

   
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!email.match(emailPattern)) {
        emailError.innerHTML = '<i class="fa-solid fa-circle-xmark" style="color: red;"></i> Enter a valid email';
        return false;
    }

   
    emailError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: green;"></i> ';
    return true;
};


function validateMessage() {
    const message = document.getElementById("contact-message").value;
    const required = 40;
    const left = required - message.length;



   
    if (left> 0) {
        messageError.innerHTML = `${left} more characters required`;
        return false;
    }

   
   
    messageError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: green;"></i> ';
    return true;
};


function validateForm(){
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage){
        submitError.style.display = 'block';
        submitError.innerHTML = "Please fix error to submit";
        setTimeout(function(){submitError.style.display = 'none';},3000)
        return false;
    }
}

