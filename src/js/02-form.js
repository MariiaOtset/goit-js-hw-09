// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, то заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищай сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.

const form = document.querySelector(".feedback-form");

form.addEventListener("input", saveToLocaleStorage);
form.addEventListener("submit", onSubmit);

function saveToLocaleStorage(event) {
    const formData = {
        email: event.currentTarget.elements.email.value.trim(),
        message: event.currentTarget.elements.message.value.trim()
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function clearFormInputs() {
  form.elements.email.value = '';
  form.elements.message.value = '';
};

const setFormInputValues = (formRef, { email, message }) => {
    formRef.elements.email.value = email  ?? '';
  formRef.elements.message.value = message ?? '';
};

function onSubmit(event) {
    event.preventDefault();
    
     const { email, message } = event.currentTarget.elements;
    if (!email.value && !message.value) {
        return alert("Email and message inputs should be filled in")
    };

    const data = {
        email: event.currentTarget.elements.email.value.trim(),
        message: event.currentTarget.elements.message.value.trim()
    }
    console.log(data)

    clearFormInputs();
    localStorage.removeItem("feedback-form-state");
};

function initializeFormData() {
  try {
    const formData =
      JSON.parse(localStorage.getItem('feedback-form-state')) ?? {};

    setFormInputValues(form, formData);
  } catch (err) {
    console.error(err);
  }
};

initializeFormData();
