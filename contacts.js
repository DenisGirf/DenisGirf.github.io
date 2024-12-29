document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const outputMessage = document.getElementById('outputMessage');
    const phonePattern = /^(\+7|8)\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Пожалуйста, введите корректный номер телефона, начинающийся с +7 или 8.");
        return;
    }
    outputMessage.style.display = 'block';
    outputMessage.innerHTML = `
        <p>Спасибо за ваш заказ!</p>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Заказ:</strong> ${message}</p>
        <p>Счёт на оплату будет отправлен на ваш адрес электронной почты.</p>
    `;
    document.getElementById('contactForm').reset();
});
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const feedbackName = document.getElementById('feedbackName').value.trim();
    const feedbackEmail = document.getElementById('feedbackEmail').value.trim();
    const feedbackMessage = document.getElementById('feedbackMessage').value.trim();
    const thankYouMessage = document.getElementById('thankYouMessage');

    if (!feedbackName || !feedbackEmail || !feedbackMessage) {
        alert("Пожалуйста, заполните все поля формы.");
        return;
    }

    thankYouMessage.style.display = 'block';
    thankYouMessage.innerHTML = `
        <p>Большое спасибо за ваш отзыв!</p>
        <p><strong>Имя:</strong> ${feedbackName}</p>
        <p><strong>Email:</strong> ${feedbackEmail}</p>
        <p><strong>Отзыв:</strong> ${feedbackMessage}</p>
    `;
    document.getElementById('feedbackForm').reset();
});
