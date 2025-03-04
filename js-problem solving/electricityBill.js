const timeOfDay1 = new Date();
const timeOfDay = timeOfDay1.getHours();
function calculateElectricityBill(units, timeOfDay){
    let bill = 0;
    if(timeOfDay >= 8 && timeOfDay <= 20){
        if(units < 100){
            bill += (units * 5);
        }
        else if(units >= 100 && units <= 300){
            bill += (units * 4);
        }
        else if(units > 300){
            bill += (units * 3)
        }
    }
    else if(timeOfDay < 8 || timeOfDay > 20){
        if(units < 100){
            bill += (units * 5.5);
        }
        else if(units >= 100 && units <= 300){
            bill += (units * 4.4);
        }
        else if(units > 300){
            bill += (units * 3.3)
        }
    }
    return bill;
}
console.log(calculateElectricityBill(250, 23));
console.log(calculateElectricityBill(250, timeOfDay));