const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

// Checking for saved data in localStorage
const savedState = JSON.parse(localStorage.getItem(localStorageKey));

if (savedState) {
  // Filling form fields with saved data
  form.elements.email.value = savedState.email || '';
  form.elements.message.value = savedState.message || '';
}

// Adding input event listener using event delegation
form.addEventListener('input', event => {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  // Saving form data to localStorage
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

// Adding submit event listener
form.addEventListener('submit', event => {
  event.preventDefault();

  // Getting and logging form data
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  console.log(formData);

  // Clearing localStorage and form fields
  localStorage.removeItem(localStorageKey);
  form.reset();
});
