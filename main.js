const form = document.querySelector('.form');
const inputs = document.querySelectorAll('input');

const firstNameValidation = document.querySelector('.form__validation-message--firstName');
const lastNameValidation = document.querySelector('.form__validation-message--lastName');
const emailValidation = document.querySelector('.form__validation-message--email');
const passwordValidation = document.querySelector('.form__validation-message--password');

const passwordPattern = /^.{6,}$/;
const emailPattern = /\./;

form.addEventListener('submit', e => {
    e.preventDefault();

    inputs.forEach(input => {
        if (input.value === '') {
            const inputId = input.id;

            switch (inputId) {
                case 'firstName':
                    firstNameValidation.textContent = error(input.placeholder);
                    break;

                case 'lastName':
                    lastNameValidation.textContent = error(input.placeholder);
                    break;

                case 'emailAddress':
                    emailValidation.textContent = error(input.placeholder);
                    break;

                case 'password':
                    passwordValidation.textContent = error(input.placeholder);
                    break;
            
                default:
                    console.log('None of the criteria was met');
                    break;
            }

            input.classList.add('input-error');
            input.setAttribute('placeholder', '');
        }

        if (form.password.value != '') {
            if (!passwordPattern.test(form.password.value)) {
                passwordValidation.textContent = 'Password must be at least 6 characters';
                form.password.classList.add('input-error');
            }
        }

        if (form.emailAddress.value != '') {
            if (!emailPattern.test(form.emailAddress.value)) {
                emailValidation.textContent = 'Looks like this is not an email';
                form.emailAddress.classList.add('input-error');
            }
        }
    });
})

const error = inputName => `${inputName} cannot be empty`;