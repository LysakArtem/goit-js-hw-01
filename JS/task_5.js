"use strict"


let price;

let country =prompt('В какую страну вы хотите оформить доставку?')
country=country.toLowerCase();
switch(country){
    case "китай":
        price=100;
        break;
    case "чили":
        price=250;
        break; 
    case "австралия":
        price=170;
        break;
    case "индия":
        price=80;
        break;
    case "ямайка":
        price=120;
        break;
    default:
        alert('В вашей стране доставка не доступна');  
}
if(price){
alert (`Доставка в ${country} будет стоить ${price} кредитов`);
}