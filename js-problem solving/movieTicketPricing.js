let standardPrice = 12;
let age = 10;
const date = new Date();
let showTime = date.getHours();
function calculateTicketPrice(age, showTime){
    if(age > 60 && showTime < 17){
        standardPrice -= (standardPrice * 0.5);
    }
    else if(age < 12 && showTime < 17){
        standardPrice -= (standardPrice * 0.6);
    }
    else if(age > 60){
        standardPrice -= (standardPrice * 0.3);
    }
    else if(age < 12){
        standardPrice -= (standardPrice * 0.4);
    }
    return (standardPrice.toFixed(2));
}
console.log(calculateTicketPrice(age, showTime));