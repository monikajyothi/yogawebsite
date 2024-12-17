const formValidation=()=>{

    const fullName=document.getElementById("fullName").value;
    const emailId=document.getElementById("emailId").value;
    const mobileNumber=document.getElementById("mobileNumber").value;
    const Message=document.getElementById("Message").value;
    
    const nameError=document.getElementById("nameError")
    const emailError=document.getElementById("emailError")
    const mobileError=document.getElementById("mobileError")
    const msgError=document.getElementById("msgError")
    
    
    let nameStat=emailStat=mobileStat=msgstatus=false
    
    
    //checking Name
    
    if(fullName.length===0){
        nameError.innerHTML="*Name is required";
    }
    else if(fullName.match(/^[a-zA-Z]+$/)){
        nameError.innerHTML="";
        nameStat=true;
    }
    else{
        nameError.innerHTML="*Nme must be alphabets"
    }

    //checking email
    if(emailId.length===0){
        emailError.innerHTML="*Email is required";
    }
    else if(emailId.match(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/)){
        emailError.innerHTML="";
        emailStat=true
    }
    else{
        emailError.innerHTML="Check Email format"
    }
    
    
    //Check Mobile

    if(mobileNumber.length===0){
        mobileError.innerHTML="*Mobile no. is required"
    }else if(mobileNumber.match(/^[0-9]+$/)){
        if(mobileNumber.length===10){
            mobileError.innerHTML="";
            mobileStat=true
        }else{
            mobileError.innerHTML="*Mobile number must be 10 digits"
        }
    }else{
        mobileError.innerHTML="*Mobile number must be numbers";
    }

    //check msg
    if(Message.length===0){
        msgError.innerHTML="* Field should not be empty"
    }
    else{
        msgError.innerHTML="";
        msgstatus=true
    }


    //status
    
    if(nameStat && emailStat && mobileStat && msgstatus){
        alert("Form submitted successfully")
        return true
    }else{
        return false
    }
    


}