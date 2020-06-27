const signupForm = document.querySelector('.signup-form');
const emailInput = document.querySelector('#email');
const emailLabel = document.querySelector('label[for="email"]');

signupForm.setAttribute('novalidate', true);

emailInput.addEventListener('blur', (e) => {

    e.preventDefault();
    emailLabel.style.opacity = 0;
    console.log(e.target.validity);
    const validState = getValidState(e.target);

    console.log(validState);

    const emailElemId = e.target.getAttribute('id') || e.target.name;
    
    if(!validState.valid){
        showError(emailInput, emailElemId, validState.errorMsg);
        return;
    }
    
    hideError(emailInput, emailElemId);

    console.log('Form submitted');

});

function getValidState(field){
    const {validity} = field;

    if(validity.valid){
        return {
            valid: true,
            errorMsg: ''
        }
    }

    if(validity.valueMissing){
        const errorMsg = `${field.name[0].toUpperCase() + field.name.slice(1)} Field is required`;
        return {
            valid: false,
            errorMsg
        }
    }

    if(validity.typeMismatch){
        const errorMsg = `Please provide a valid ${field.name}`;
        return {
            valid: false,
            errorMsg
        }
    }
}

function showError(field, fieldId, error){
    let errorElem = document.querySelector(`#error-${fieldId}`);

    if(errorElem){
        errorElem.innerHTML = error;
    }
    else{
        errorElem = document.createElement('strong');
        errorElem.setAttribute('id', `error-${fieldId}`);
        errorElem.classList.add('error-message');
        errorElem.innerHTML = error;

        field.classList.add('invalid');
        field.parentElement.append(errorElem);
        field.parentElement.classList.add('invalid');
    }
}

function hideError(field, fieldId){
    let errorElem = document.querySelector(`#error-${fieldId}`);

    if(errorElem){
        errorElem.remove();
    }

    field.parentElement.classList.remove('invalid');
    field.classList.remove('invalid');
    field.classList.add('valid');
}



