

function eligibility(gradScore,  hscScore,  sscScroe,  candidateName) {
if (gradScore>=70 || hscScore>=80 || sscScroe>=90) {
    console.log(`congrats ${candidateName} you are eligible for TCS interview`);
    
} else {
    console.log(`Unfortunately you are not eligible for interview`);
    
}
    
}
eligibility(80, 86, 90, "Anurag");
eligibility(70, 65, 55, "Akash");
eligibility(60, 79, 88, "Bharat");