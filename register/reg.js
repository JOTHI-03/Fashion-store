const form = document.querySelector('#form')
const user = document.querySelector('#username');
const emailid = document.querySelector('#email');
const psswrd = document.querySelector('#password');
const con_pswrd = document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
        e.preventDefault();
    }
})

function validateInputs(){
    const username = user.value.trim()
    const email = emailid.value.trim();
    const password = psswrd.value.trim();
    const cpassword = con_pswrd.value.trim();
    let success = true

    if(username===''){
        success=false;
        setError(user,'Username is required')
 }
    else{
        setSuccess(user)
    }



    if(email===''){
        success = false;
        setError(emailid,'Email is required')
  }
    else if(!validateEmail(email)){
        success = false;
        setError(emailid,'Please enter a valid email')
  }
    else{
        setSuccess(emailid)
    }

    if(password === ''){
        success= false;
        setError(psswrd,'Password is required')
  }
    else if(password.length<8){
        success = false;
        setError(psswrd,'Password must be atleast 8 characters long')
    }
    else{
        setSuccess(psswrd)
  }

    if(cpassword === ''){
        success = false;
        setError(con_pswrd,'Confirm password is required')
 }
    else if(cpassword!==passwordVal){
        success = false;
        setError(con_pswrd,'Password does not match')
    }
    else{
        setSuccess(con_pswrd)
  }

    return success;

}
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (emailid) => {
    return String(emailid)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };