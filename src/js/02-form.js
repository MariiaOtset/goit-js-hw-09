// Використовуючи делегуваня, відстежуй на формі подію input і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, то заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищай сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.

const form = document.querySelector(".feedback-form");

form.addEventListener("input", inputForm);
form.addEventListener("submit", onSubmit);

function inputForm(event) {
    const formData = {
        email: event.currentTarget.elements.email.value.trim(),
        message: event.currentTarget.elements.message.value.trim()
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function loadData() {
     const savedData = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (savedData) {
        email.value = savedData.email || '';
        message.value = savedData.message || '';
    }
}

function onSubmit(event) {
     event.preventDefault();

}