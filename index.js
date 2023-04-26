const inputField = document.getElementsByTagName("input");
const labelField = document.getElementsByTagName("label")


formSubmit.addEventListener('click', function(e){
    e.preventDefault()
        
    for (let index = 0; index < inputField.length; index++) {
        const input = inputField[index];
        const label = labelField[index]
        check_empty_string(input, label)
    }
    console.log(check_more_than_three_char(inputField[0],labelField[1]))
    console.log(check_same_string(inputField[2], inputField[3], labelField[3]))
    console.log(check_same_string(inputField[4], inputField[5], labelField[5]))
    console.log(check_age_over_18(inputField[6],labelField[6]))
    console.log(check_more_than_six_char(inputField[4], labelField[4]))
    console.log(check_validate_email(inputField[2], labelField[2]))
})




function check_empty_string(input, label){
    if (input.value.length > 0) {
      return input.value
    } 
    else {
      const empty = document.createElement("div");
      empty.innerHTML += "can't be blank";
      label.appendChild(empty);
    }
    }

function check_more_than_three_char(input,label){
    if(input.value.length < 3){
        const fieldMsg = document.createElement("div");
        fieldMsg.innerHTML += "doit ếtre supérieur à 3";
        label.appendChild(fieldMsg);
    }
    return input.value
}

function check_same_string(input, input_confirmation,label){
    if(input.value === input_confirmation.value ){
        return input.value
    }else{
        const fieldMsg = document.createElement("div");
        fieldMsg.innerHTML += "Ne correspond pas";
         label.appendChild(fieldMsg);
    }
}

function check_age_over_18(age, label){
    if(age.value < 18){
        const fieldMsg = document.createElement("div");
        fieldMsg.innerHTML += "Age minimal 18 ans";
         label.appendChild(fieldMsg);
    }
    return age.value
}

function check_more_than_six_char(input,label){
    if(input.value.length < 6){
        const fieldMsg = document.createElement("div");
        fieldMsg.innerHTML += "Doit contenir plus que 6 char";
         label.appendChild(fieldMsg);
    }
    return input.value
}
function check_validate_email(email, label){
    let emailReg = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    if(emailReg.test(email.value)){
        return email.value

    }else{
        const fieldMsg = document.createElement("div");
        fieldMsg.innerHTML += "Email invalide";
         label.appendChild(fieldMsg);
    }


}
