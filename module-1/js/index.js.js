const sharm = 15;
const kurgada = 25;
const taba = 6;

let tabaPlacesLeft;
let kurgadaPlacesLeft;
let sharpPlacesLeft;

const userInput = Number(prompt('Сколько мест вам нужно?'));
const validInput = userInput !== Number.isNaN(userInput) && userInput > 0;

if (validInput) {

    if (userInput <= 6) {

        const tabaAgreement = confirm('Вы согласны потешествовать у группе taba?'); 
        
        switch (tabaAgreement) {
            case true: 
                tabaPlacesLeft = taba - userInput;
                alert('Приятного путешествия в группе taba');
                break;

            default:
                alert('Нам очень жаль, приходите еще');
        }
    }   
    else if (userInput <= 15) {
       
        const sharmAgreement = confirm('Вы согласны потешествовать у группе taba?'); 
        switch (sharmAgreement) {

            case true: 
                sharmPlacesLeft = sharm - userInput;
                alert('Приятного путешествия в группе sharm');
                break;

            default:
                alert('Нам очень жаль, приходите еще');
        }
    }  
    else if  (userInput <= 25) {
        
        const kurgadaAgreement = confirm('Вы согласны потешествовать у группе kurgada?'); 
        switch (kurgadaAgreement) {

            case true: 
                kurgadaPlacesLeft = kurgada - userInput;
                alert('Приятного путешествия в группе sharm');
                break;

            default:
                alert('Нам очень жаль, приходите еще');
        }
    }   
    else {
        alert('Извините, мест нет');
    }
}   else {
    alert('Ошибка ввода');
}

