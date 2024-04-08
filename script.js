// Получаем ссылки на элементы DOM
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main section');

// Функция для скроллинга к соответствующему разделу при клике на ссылку в навигации
navLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        sections[index].scrollIntoView({ behavior: 'smooth' });
    });
});

// Функция для подсветки активной ссылки в навигации при прокрутке страницы
window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение формы

        // Получаем значения из полей формы
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Здесь можно добавить дополнительную логику, например валидацию данных

        // Отправляем данные на сервер (здесь можно добавить AJAX запрос или другую логику обработки данных)
        console.log('Отправка данных:');
        console.log('Имя:', name);
        console.log('Email:', email);
        console.log('Сообщение:', message);

        // Очищаем поля формы после отправки
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';

        alert('Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
    });
});


javascript
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const h2 = section.querySelector('h2');
        const p = section.querySelector('p');

        h2.addEventListener('click', function() {
            p.classList.toggle('show');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const h2 = section.querySelector('h2');
        const p = section.querySelector('p');
        const img = section.querySelector('img');

        h2.addEventListener('click', function() {
            p.classList.toggle('show');
            img.classList.toggle('show');
        });
    });
});