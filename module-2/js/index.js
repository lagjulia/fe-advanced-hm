'use strict'

const arr = [];
let userInput;
let num;
let hasNumber = false;
let total = 0;
  
do {
      userInput = prompt('Пожалуйста, введите любое число'); 
      num = Number(userInput);
        { 
            if (userInput === null){
            break;
            } else if (hasNumber === !Number.isNaN(num)){
            alert ('Это не число, попробуйте еще');
            } else {
            arr.push(num);
            }
        }
    }
while (userInput !== null);

for (let i = 0, max = arr.length; i < max; i +=1) {
    console.log(arr[i]);
    total += arr[i];
}

 alert (`Общая сумма равна ${total}`);