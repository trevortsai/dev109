function isValid() {
  var vFirst = firstName();
  var vEmail = checkemail();
  var vComment = address();


    if (vFirst && vEmail && vComment) {
    
    return true;
    }else {
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
    }
}
function firstName(){
    //1) Create variable
    var validFirstname=false;

    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

    //3) Do validation
    if (firstname==="null" || firstname==="" || firstname.length > 40 ) {
        errorMessages += "<p>Name is required and cannot be greater than 40 characters</p>";
        console.log("First name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in name (accepts only A-Z, a-z, and ,.'-)</p>";
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
function address() {
  var userAddress = document.getElementById("Address").value;
  var validAddress = false;
  var errorMessages = "";
  if (userAddress === "" || userAddress === null) {
    errorMessages = "<p>Invalid comment - enter comment</p>";
  } else {
    validAddress = true;
  }
  document.getElementById("comment").innerHTML = errorMessages;
  return validAddress;
}
