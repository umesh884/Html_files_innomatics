

function atm(event){
    let a = true;
    let fd  = new FormData(event.currentTarget);
    let fo = Object.fromEntries(fd.entries());
    console.log(fo);
    //let in1 = document.getElementById("pin").value;
    //let in2 = document.getElementById("pin1").value;
    //let fd = formData.set('in1', in1);
    let pin = fd.get('in1'); // get data by name attribute
    //let fd1 = formData.set('in2', in2);
    let pin1 = fd1.get('in2');
    let enterPin;
    if(pin === pin1){
        alert("Pin is correct!, Access is allowed");
        a = true;
    }
    else{
        alert("Incorrect pin! , Enter the correct pin");
        a = false;
    }
    while (a){
        let bal = Number(document.querySelector('.bal1').textContent);
        if (a){
            document.getElementById('amount')
        }

    }
}