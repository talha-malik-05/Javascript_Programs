function convertTemperature(tmp){
    const f=((9/5)*tmp)+32;
    console.log(`Temperature in Fahrenheit is : ${f}`);
}

const r = require("readline");
const r1 = r.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter Temperature in Celsius : ", function(c) {
    convertTemperature(c);
    r1.close();
});