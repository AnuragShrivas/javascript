var sumOfQube = function(num){
    var sum =0;
    for (let index = 1 ; index <=num; index++){
        sum = sum + index * index * index;
    }
    console.log(`Sum of qube of number is: ${sum}`);
}
sumOfQube(5);
sumOfQube(9);
sumOfQube(12);