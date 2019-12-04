var fs = require('fs')
const util = require('util')


var input = fs.readFileSync('input', 'utf8');

var start = new Date().getTime();

input = input.split('\n');

let testDoubleDigit = (num) => {
    let double = false;
    let str = String(num);
    for(var j = 0; j < str.length; j++){
        // console.log(str[j] == str[j + 1])
        if(str[j] == str[j + 1]){
            // console.log(str[j+2] == str[j])
            if(str[j+2] == str[j]){
                j++;
                if(str[j+2] == str[j]){
                    j++;
                    if(str[j+2] == str[j]){
                        j++;
                        if(str[j+2] == str[j]){
                            j++
                        }
                    }
                }
            }else{
                return true;
                // console.log('beep boob')
            }
        }
    }
    return false;
}

let testIncreasing = (num) => {
    let str = String(num);
    for(var k = 0; k < str.length - 1; k++){
        if(str[k + 1] < str[k]){
            return false;
        }
    }
    return true;
}

var count = 0;



for(var i = 138241; i <= 674034; i++){
    var doubleDigit = testDoubleDigit(i);
    var increasing = testIncreasing(i);
    if(doubleDigit && increasing){
        count++;
    }
}

console.log(count);


var end = new Date().getTime();
var time = end - start;
console.log(time)
