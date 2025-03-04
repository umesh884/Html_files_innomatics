function choosePlan(planType, wantsTrainer, wantsDietPlan){
    if(planType === "VIP" && wantsTrainer != "" && wantsDietPlan === "Obesity"){
        console.log("You want VIP Plan");
        console.log("VIP ($80/month -> Gym + Trainer + DietPlan)");
    }
    else if(planType === "Premium" && wantsTrainer != "" ){
        console.log("You want Premium Plan");
        console.log("Premium ($50/month -> Gym + Trainer)");
    }
    else if(planType === "Basic"){
        console.log("You want VIP Plan");
        console.log("Basic ($20/month -> Gym)");
    }
}
console.log(choosePlan("VIP","Coach","Obesity"));