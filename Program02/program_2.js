function convertHeight(h){
    const heightInCentimeters=2.54*h;
    console.log(`Your Height in Centimeters is : ${heightInCentimeters}`);
}

const r = require("readline");
const r1 = r.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter Your Height in inches : ", function(height) {
    convertHeight(height);
    r1.close();
});