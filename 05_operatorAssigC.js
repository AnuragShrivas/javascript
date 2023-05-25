
var num1=(80, 86, 90,  "Anurag");
var num2= (70, 65, 55, "Akash");
var num3 = (60, 79, 88, "Bharat");
function eligibility(gradScore,  hscScore,  sscScore, candidateName) {
var result = (gradScore <= 70 || hscScore <=80 || sscScore < 90) ?  `  ${candidateName} congrats you are eligible for TCS interview ` : `  ${candidateName} Unfortunately you are not eligibile for interview`;
   console.log(`${result}`);
}
eligibility (80, 86, 90,  "Anurag");
eligibility (70, 65, 55, "Akash");
eligibility (60, 79, 88, "Bharat");