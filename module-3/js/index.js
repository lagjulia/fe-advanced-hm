'use strict'
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let login = prompt('Введите логин');

const heckIfLoginExists = function(arr, userInput) {
    let hasLogin;
    for (let item of arr) 
    if (userInput === item) {
        hasLogin = true;
        return hasLogin
    } else {
        hasLogin = false;
    }   return hasLogin;
};

const checkLoginValidity = function(userInput) {
    let minLength = 4;
    let maxLength = 16;
    let lengthValidity; 
    if (userInput === null) {
        lengthValidity = false;
    } else if (login.length >= minLength && login.length <= maxLength) {
        lengthValidity = true;
    } else {
        lengthValidity = false;
    }  return lengthValidity;
};


const addLogin = function(arr, userInput) {
    if (checkLoginValidity(userInput) === false) {
        return alert ('Ошибка! Логин должен быть от 4 до 16 символов');
    } else if (heckIfLoginExists (arr, userInput) === false) {
        logins.push(userInput);
        alert('Логин успешно добавлен');
    } else {
        alert('Такой логин уже используется');
    }
};


const z = addLogin(logins, login);
console.log(z);
console.log(logins);