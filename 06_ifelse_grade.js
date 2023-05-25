

function voteEligibility(age) {
  if ( age<120  && age > 18) {
    console.log(`${age} eligible for vote`);
    
  } else {
    if ( age == 0 || age== -10 || age == undefined || age== null || age>120 ) {
        console.log(`${age} Invalid data`);
        
    } 
    else{
      if (age > 18) {
        
      }  console.log(`${age} not eligible for vote`);
    }
       
    
  }
    
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);