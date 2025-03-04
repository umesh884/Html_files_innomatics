let density = 15;
function trafficLightControl(density){
    if(density < 10){
        console.log("Light Traffic -> Green for 20 seconds");
    }
    else if(density >= 10 && density < 20){
        console.log("Moderate Traffic -> Green for 40 seconds");
    }
    else if(density >= 20 && density < 30){
        console.log("Heavy Traffic -> Green for 60 seconds");
    }
}
trafficLightControl(density);