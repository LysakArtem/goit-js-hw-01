"use strict"

 let credits= 23580;
 const pricePerDroid = 3000;
 let message;
 let totalPrice

  let input= prompt('Сколько дроидов Вы хотите купить?');
 if (input === null) {
    message='Отменено пользователем!';
 }
 else {
    input=Number(input);
    const notANomber=Number.isNaN(input)
    if(notANomber){
        alert('Вы ввели некоректное число');
    }
    else {
        totalPrice = pricePerDroid*input;
        if(totalPrice>credits){
            alert('Недостаточно средств на счету!');
         }
         else {
             let creditsBalans= credits-totalPrice;
             alert(`'Вы купили ${input} дроидов, на счету осталось ${creditsBalans} кредитов.'`)
         }
    }
 }
