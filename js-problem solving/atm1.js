// ATM withdraw
let user_pin = prompt("Enter your debit card pin");
let balance = 10000;
let user_pin1 = Number(user_pin);
let enter_pin = prompt("Enter again your debit card pin");
let enter_pin1 = Number(enter_pin);
let a = false;
if(user_pin1 === enter_pin1){
    a = true;
    alert("Pin matched access given");
    
    while(a){
        let choice = prompt("You want to withdraw the amount (Yes/No)");
        if(choice == 'Y'){
            let amount1 = prompt("Enter amount to withdraw from account");
            if(amount1 < balance)
                balance = balance - amount1.valueOf()
            else{
                alert("Cannot withdraw more than available balance");
            }
        }
        else{
            confirm("You don't want to withdraw amount")
        }
    }
}
else{
    alert("Pin not matched access denied,try again");
    
}

function atm(event){
    let a = true;
    let formData  = new FormData(event.currentTarget);
    let fd = formData.set('in', in1);
    let pin1 = fd.get('in1'); // get data by name attribute
    let in1 = document.getElementById("pin").value;
    let enterPin;
    if(pin1 === enterPin){
        prompt("Pin is correct!, Access is allowed");
        a = true;
    }
    else{
        prompt("Incorrect pin! , Enter the correct pin");
        a = false;
    }
    while (a){
        let bal = Number(document.querySelector('.bal1').textContent);
        if (a){
            document.getElementById('amount')
        }

    }
}