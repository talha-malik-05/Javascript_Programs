function checkPrime(number){
    let check="a";
    if(number > 1){
        for(let i=2;i<number;i++){
            if(number%i == 0){
                check="b";
                break;
            }
        }
    }else{
        check="b";
    }
    if(check=="a"){
        console.log(`${number} is a prime number.`);
    }else{
        console.log(`${number} is not a prime number.`);
    }
}

const r = require("readline");
const r1 = r.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter A Number : ", function(num) {
    checkPrime(num);
    r1.close();
});