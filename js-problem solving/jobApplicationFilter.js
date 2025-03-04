const age = 30;
const experience = 3;
const qualification = "Bachelor's Degree";
function isEligibleForJob(age, experience, qualification){
    if(age > 21 && age < 55 && experience > 2 && qualification === "Bachelor's Degree"){
        console.log("Applicant is eligible")
    }
    else{
        cosole.log("Applicant is ineligible");
    }
}
isEligibleForJob(age, experience, qualification);