import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const storageKey = 'feedback-form-state';

const saveFormState = () => {
const formState = {
email: emailInput.value,
message: messageInput.value,
};
localStorage.setItem(storageKey, JSON.stringify(formState));
};

emailInput.addEventListener('input', throttle(saveFormState, 500));
messageInput.addEventListener('input', throttle(saveFormState, 500));

const populateFormFields = () => {
const savedFormState = localStorage.getItem(storageKey);
if (savedFormState) {
const formState = JSON.parse(savedFormState);
emailInput.value = formState.email;
messageInput.value = formState.message;
}
};

populateFormFields();

form.addEventListener('submit', (e) => {
e.preventDefault();

localStorage.removeItem(storageKey);

emailInput.value = '';
messageInput.value = '';

const formState = {
email: '',
message: '',
};
console.log('Form Data:', formState);
});
