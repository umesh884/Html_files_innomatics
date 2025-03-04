let baseFare = 300;
let totalPrice = 0;
function calculateFlightFare(classType, luggageWeight, isStudent, isSenior){
    if(classType === "Business class"){
        totalPrice += (baseFare + 200);
        if(isStudent){
            totalPrice -= (totalPrice * 0.15);
        }
        else if(isSenior){
            totalPrice -= (totalPrice * 0.1);
        }
        for(let i = 20; i <= 1000; i += 10){
            if(luggageWeight > i && luggageWeight < i+10){
                totalPrice += (((i/10)-1) * 50);
                break;
            }
            
        }
    }
    else if(classType === "First class"){
        totalPrice += (baseFare + 500);
        if(isStudent){
            totalPrice -= (totalPrice * 0.15);
        }
        else if(isSenior){
            totalPrice -= (totalPrice * 0.1);
        }
        for(let i = 20; i <= 1000; i += 10){
            if(luggageWeight > i && luggageWeight < i+10){
                totalPrice += (((i/10)-1) * 50);
                break;
            }
            
        }
        
    }
    return totalPrice;
}
console.log(calculateFlightFare("Business class", 45, true, false));