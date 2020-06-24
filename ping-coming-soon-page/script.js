const signupForm = document.querySelector('.signup-form');

signupForm.setAttribute('novalidate', true);

signupForm.addEventListener('blur', (e) => {
    if(e.target.tagName === 'INPUT'){
        const validState = getValidityState(e.target);
        
        if(!validState.valid){
            showErrorMsg(e.target, validState.error);
            return;
        }
        hideErrorMsg(e.target);
    }
}, true);

signupForm.addEventListener('submit', (e) => {
    const inputFields = document.querySelectorAll('input');
    let hasErrors = false;

    for(const field of inputFields){
        const validState = getValidityState(field);

        if(!validState.valid){
            hasErrors = true;
            showErrorMsg(field, validState.error);
        }
        else{
            hideErrorMsg(field);
        }
    }

    if(!hasErrors){
        console.log("Form successfully submitted");
        return;
    }

    e.preventDefault();

});

signupForm.addEventListener('input', (e) => {
    if(e.target.tagName === 'INPUT'){

        const errorElem = document.querySelector('#error-email');

        if(errorElem){
           errorElem.remove();
        }
    }
});

function getValidityState(field){
    const validity = field.validity;

    if(validity.valid){
        return{
            valid: true,
            error: null
        }
    }

    if(validity.valueMissing){
        return{
            valid: false,
            error: 'Whoops! It looks like you forgot to add your email'
        }
    }

    if(validity.typeMismatch){
        return{
            valid: false,
            error: 'Please provide a valid email address'
        }
    }
}

function showErrorMsg(field, errorMsg){
    let errorElem = document.querySelector('#error-email');

    if(errorElem){
        errorElem.innerHTML = errorMsg;
    }else{
        errorElem = document.createElement('strong');
        errorElem.setAttribute('id', 'error-email');
        errorElem.classList.add('error-message');
        errorElem.innerHTML= errorMsg;

        field.parentElement.append(errorElem);
        field.parentElement.classList.add('form-invalid');
        field.classList.add('error');
        field.classList.remove('input-valid');        
    }
}

function hideErrorMsg(field){
    const errorElem = document.querySelector('#error-email');

    if(errorElem){
        errorElem.remove();
    }

    field.classList.remove('error');
    field.classList.add('input-valid');
    field.parentElement.classList.remove('form-invalid');
}