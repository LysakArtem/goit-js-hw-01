"use strict"

const ADMIN_PASSWORD = 'Artem';
let message;

let input = prompt('Введиет пароль');
if (input === null) {
    message='Отменено пользователем!';
}
else if (input===ADMIN_PASSWORD){
    message='Добро пожаловать!';
}
else 
    message='Неверный пароль!';
alert(message);