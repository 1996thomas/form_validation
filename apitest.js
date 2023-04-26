function validateForm() {
    checkEmptyField()
    moreThanThreeChar()
    moreThanSixCharPassword()
}


function checkEmptyField() {
    let x = document.forms["myForm"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  } 

  function moreThanThreeChar(){
    let x = document.forms["myForm"]["email"].value
    let emailReg = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    if(!emailReg.test(x)){
        alert("Invalid E-mail")
        return false
    }
  }

  function moreThanSixCharPassword(){
    let x = document.forms["myForm"]["password"].value
    if(x.length < 6){
        alert("password must be more than 6char")
        return false
    }
  }