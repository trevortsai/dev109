function isValid() {
  var vFirst = firstName();
  var vLast = lastName();
  var vEmail = checkemail();
  var vPhone = phone();
  var vUsername = username();
  var vPassword = password();
  var vCity = city();
  var vAddress = address();
  var vZipcode = zipcode();


    if (vFirst && vLast && vEmail && 
        vPhone  && vUsername && 
        vPassword && vCity && 
        vAddress && vZipcode) {
    
    return true;
    }else {
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
    }
}

function phone() {
  var validPhone = false;
  var userPhone = document.getElementById("Phone").value;
  var errorMessages = "";
  if (isNaN(userPhone) || userPhone.length >15 || userPhone===null || userPhone==="") {
     errorMessages = "<p>Invalid phone number </p>";
  } else {
    validPhone = true;
  }
  document.getElementById("phoneerror").innerHTML = errorMessages;
    return validPhone;

}


function checkemail() {
  var validEmail = false;
  var userEmail = document.getElementById("Email").value;
  var atpos = userEmail.indexOf("@");
  var dotpos = userEmail.lastIndexOf(".");
  var errorMessages = ""
  if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
    errorMessages = "<p>Invalid email</p>";
  }else{
    validEmail = true; //Or assign the value to a variable. For example validEmail = true
}
    document.getElementById("mail").innerHTML = errorMessages;
  return validEmail;
};

FirstName.addEventListener('blur', firstName, false);
function firstName(){
    //1) Create variable
    var validFirstname=false;

    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

    //3) Do validation
    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in first name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                validFirstname = true;
                console.log("First name valid")
        };

    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;

    //5) return status of each field
    return (validFirstname);
};

LastName.addEventListener('blur', lastName, false);

function lastName() {
    //1) Create variable
    var validLastname=false;

    //2) read value from HTML
    var lastname = document.getElementById("LastName").value;
    var errorMessages = "";

    //3) Do validation
    if (lastname==="null" || lastname==="" || lastname.length > 50 ) {
        errorMessages += "<p>The last name is required and cannot be greater than 50 characters</p>";
        console.log("Last name invalid — length")
        } else if (lastname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("Last name invalid — bad characters")
        } else {
                validLastname = true;
                console.log("Last name valid")
        };

    //4) Send error message to HTML
    document.getElementById("lname").innerHTML = errorMessages;

    //5) return status of each field
    return (validLastname);
};

function username() {
  var validUsername = false;
  var userUsername = document.getElementById("Username").value;
  var errorMessages = "";
  if (userUsername.length >12) {
    errorMessages = "<p>Username invalid - too long</p>"
  } else if (userUsername ==="" || userUsername === null){
    errorMessages = "<p>Username invalid - enter username</p>"
  } else {
    validUsername = true
    console.log("user good")
  }
  document.getElementById("uname").innerHTML = errorMessages;
  return validUsername
}

function password() {
  var userPassword = document.getElementById("Password").value;
  var errorMessages = "<p>";
  var checknumber = false;
  var uppercase = false;
  var lowercase = false;
  var special = false;
  for (var i = 0; i<userPassword.length; i++) {
    if (!isNaN(userPassword.charAt(i))) {
      checknumber = true;
    } else if (/^[A-Z]$/.test(userPassword.charAt(i))) {
      uppercase = true;
    } else if (/^[a-z]$/.test(userPassword.charAt(i))) {
      lowercase = true;
    } else {
      special = true;
    }
  }
  if ((userPassword.length > 7 || !checknumber || !uppercase && 
        !lowercase || !special || userPassword === null || userPassword ==="")) {
    errorMessages+="Invalid password:";
  }
  if (!checknumber) {
    errorMessages+="<br>-Must have a number";
  }
  if (!uppercase) {
    errorMessages+="<br>-Must have an uppercase letter";
  }
  if (!lowercase) {
    errorMessages+="<br>-Must have a lowercase letter";
  }
  if (!special) {
    errorMessages+="<br>-Must have a special character";
  }
  if (userPassword.length > 7) {
    errorMessages+="<br>-Max password length is 7";
  }
  if (userPassword === null || userPassword ==="") {
    errorMessages+="<br>-No password entered";
  }
  errorMessages +="</p>";
  document.getElementById("Pword").innerHTML = errorMessages;
  if ((userPassword.length <=7 && checknumber && uppercase 
          && lowercase && special && userPassword != null && userPassword !="")) {
    console.log("password good");
  }
  return (userPassword.length <=7 && checknumber && uppercase 
          && lowercase && special && userPassword != null && userPassword !="")
}

function city() {
  var userCity = document.getElementById("City").value;
  var validCity = false;
  var errorMessages = "";

  if (userCity === "" || userCity === null) {
    errorMessages = "<p>Invalid city - enter city</p>";
  } else {
    validCity = true;
  }
  document.getElementById("city").innerHTML = errorMessages;
  return validCity;
}
function address() {
  var userAddress = document.getElementById("Address").value;
  var validAddress = false;
  var errorMessages = "";
  if (userAddress === "" || userAddress === null) {
    errorMessages = "<p>Invalid address - enter address</p>";
  } else {
    validAddress = true;
  }
  document.getElementById("address").innerHTML = errorMessages;
  return validAddress;
}
function zipcode() {
  var validZipcode = false;
  var userZipcode = document.getElementById("Zipcode").value;
  var errorMessages = "";
  var userCountry = document.getElementsByName("countries")[0].value;
  var numbers = 0;
  for (var i=0; i < userZipcode.length; i++) {
    if (!NaN(userZipcode.charAt(i))) {
      numbers++;
    }
  }
    if (userCountry == "USA" && (userZipcode === "" || userZipcode === null)) {
    errorMessages = "<p>Invalid zipcode - enter zipcode</p>";
    
  } else if (userCountry == "USA" && (numbers != 6)) {
      errorMessages = "<p>Invalid zipcode - zipcode must be 6 numbers</p>";
    }
    else {
    validZipcode= true;
  }
  document.getElementById("zipcode").innerHTML = errorMessages;
  return validZipcode;
  
}




