function checkAverage(m1,m2,m3){
    const sum = parseInt(m1)  + parseInt(m2) + parseInt(m3);
    const marksAverage = sum/3;
    if(marksAverage > 80){
        console.log("You are above standard, Admission Granted!");
    }else{
        console.log("Average of marks is less than 80");
    }
}

const r = require("readline");
const r1 = r.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter Marks of 1st subject : ", function(marksOne) {
    r1.question("Enter Marks of 2nd subject : ", function(marksTwo) {
        r1.question("Enter Marks of 3rd subject : ", function(marksThree) {
            checkAverage(marksOne,marksTwo,marksThree);
            r1.close();
        });
    });
});