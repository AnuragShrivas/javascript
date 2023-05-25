
function monthOfYear(monthNumber) {
    switch (monthNumber) {
        case 2:
            console.log(`month is: February as month number is  ${monthNumber}`);
            break;
            case 5:
                console.log(`month is: May as month number is  ${monthNumber}`);
                break;
                case 12:
                    console.log(`month is: December as month number is  ${monthNumber}`);
                    break;
                
    
        default:
            console.log(`invalid input data==> month is ${monthNumber}`);
            break;
    }
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);

monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);
