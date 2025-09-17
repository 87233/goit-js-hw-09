let formData = {
  email: '',
  message: '',
};

const localStorageKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

formData = JSON.parse(localStorage.getItem(localStorageKey)) ?? {
  email: '',
  message: '',
};
form.elements.email.value = formData.email;
form.elements.message.value = formData.message;

form.addEventListener('input', event => {
  const el = event.currentTarget.elements;
  formData.email = el.email.value.trim();
  formData.message = el.message.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    form.reset();
    localStorage.removeItem(localStorageKey);
    formData = { email: '', message: '' };
  }
});
