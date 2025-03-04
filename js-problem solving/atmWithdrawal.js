let pin = prompt("Create the pin of your atm card: ");
console.log(`You have created the pin: ${pin}`);
let enteredPin = prompt("Re-enter the pin of your atm card");
let match = false;
let balance = 1000000;
function atmWithdrawal(balance, amount, pin, enteredPin){
    
    if(pin === enteredPin){
        console.log(`Initial Balance is ${balance}`);
        match = true;
         if (match){
            console.log("Correct pin!");
            if(amount > balance){
                console.log("Insuffient funds");
            }
            else if(amount < balance && amount % 100 === 0){
                balance -= amount;
                console.log(`You have withdrawn amount of ${amount}`)
                console.log(`Available Balance is ${balance}`);
            }
            else if(amount < balance && amount % 100 != 0){
                console.log("Enter the amount which is multiple of 100");
            }
            
        }
    } 
    else{
        console.log("Incorrect Pin, please enter again!");
    }
    return balance;
}
console.log(atmWithdrawal(balance, 40000, pin, enteredPin));