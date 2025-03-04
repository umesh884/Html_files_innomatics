let orderAmount = 890;
let expressShipping = 10;
let freeShipping = 0;
function calculateFinalAmount(orderAmount){
    if(orderAmount > 1000){
        orderAmount -= (orderAmount * 0.2);
    }
    else if(orderAmount > 500 && orderAmount < 1000){
        orderAmount -= (orderAmount * 0.1);
    }
    else if(orderAmount < 500){
        orderAmount += 0;
    }
    if(orderAmount > 50){
        orderAmount += freeShipping;
    }
    else if(orderAmount < 50){
        orderAmount += expressShipping;
    }
    return orderAmount;
}
console.log(calculateFinalAmount(orderAmount));