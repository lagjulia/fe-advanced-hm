'use strict'

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let login = prompt('Введите логин');

const heckIfLoginExists = function(logins, login) {
    for (let item of logins) {
        if (login === item) {
          let hasLogin = true;
          return hasLogin;
        } else {
            let hasLogin = false;
            return hasLogin;
        }
    }
};

const checkLoginValidity = function(login) {
    let minLength = 4;
    let maxLength = 16;
    let lengthValidity; {
          if (login.length >= minLength && login.length <= maxLength) {
              lengthValidity = true;
          } else {
              lengthValidity = false;
          }
      }  return lengthValidity;
};

  const addLogin = function(logins, login) { 
    {
        if (checkLoginValidity(login) === false) {
            return alert ('Логин не годится');
        } else {
            if (heckIfLoginExists (logins, login) === false) {
                logins.push(login);
                alert('Логин успешно добавлен');
            } else {
                alert('Такой логин уже используется');
            }
        }
    }
};

const z = addLogin(logins, login);
console.log(z);
console.log(logins);