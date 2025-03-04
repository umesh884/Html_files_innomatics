
function applyCoupon(orderAmount, couponCode){
    if(orderAmount > 500 && couponCode === "DISCOUNT10"){
        orderAmount -= (orderAmount * 0.1);
    }
    if(orderAmount > 500 && couponCode === "FREESHIP"){
        orderAmount += 0;
    }
    else if(orderAmount > 200 && orderAmount < 500 && couponCode === "FREESHIP"){
        orderAmount += 0;
    }
    return orderAmount;
}
console.log(applyCoupon(560, "DISCOUNT10"))