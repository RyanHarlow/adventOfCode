var fs = require('fs')
const util = require('util')


var input = fs.readFileSync('input', 'utf8');

input = input.split(',');


var i = 2;
input[225] = 5;

let first = 0;
let second = 0;
let third = 0;

let x = 0;
let y = 0;

while(i < input.length){
    if(input[i].length <= 2){
        first = 0;
        second = 0;
        third = 0;
    }
    if(input[i].length == 3){
        first = input[i][0];
        second = 0;
        third = 0;
    }
    if(input[i].length == 4){
        first = input[i][1];
        second = input[i][0];
        third = 0;
    }if(input[i].length == 5){
        first = input[i][2];
        second = input[i][1];
        third = input[i][0];
    }

    if(input[i][input[i].length-1] == 1){
        if(first == 0){
            x = Number(input[input[i + 1]]);
        }else if(first == 1){
            x = Number(input[i + 1])
        }

        if(second == 0){
            y = Number(input[input[i + 2]]);
        }else if(second == 1){
            y = Number(input[i + 2])
        }
        input[input[i+3]] = String(x + y);
        i = i + 4;
    }else if(input[i][input[i].length-1] == 2){
        if(first == 0){
            x = Number(input[input[i + 1]]);
        }else if(first == 1){
            x = Number(input[i + 1])
        }

        if(second == 0){
            y = Number(input[input[i + 2]]);
        }else if(second == 1){
            y = Number(input[i + 2])
        }
        
        input[input[i+3]] = String(x * y);
        i = i + 4;
    }else if(input[i][input[i].length-1] == 4){
        if(first == 0){
            console.log(input[input[i+1]])
        }else if(first == 1){
            console.log(input[i + 1])
        }
        i = i + 2;
    }else if(input[i] == 99){
        break
    }else if(input[i][input[i].length-1] == 5){
        if(first == 0){
            x = Number(input[input[i + 1]]);
        }else if(first == 1){
            x = Number(input[i + 1])
        }

        if(second == 0){
            y = Number(input[input[i + 2]]);
        }else if(second == 1){
            y = Number(input[i + 2])
        }
        if(x != 0){
            i = y;
        }else{
            i = i + 3;
        }
    }else if(input[i][input[i].length-1] == 6){
        if(first == 0){
            x = Number(input[input[i + 1]]);
        }else if(first == 1){
            x = Number(input[i + 1])
        }

        if(second == 0){
            y = Number(input[input[i + 2]]);
        }else if(second == 1){
            y = Number(input[i + 2])
        }
        if(x == 0){
            i = y;
        }else{
            i = i + 3;
        }
    }else if(input[i][input[i].length-1] == 7){
        if(first == 0){
            x = Number(input[input[i + 1]]);
        }else if(first == 1){
            x = Number(input[i + 1])
        }

        if(second == 0){
            y = Number(input[input[i + 2]]);
        }else if(second == 1){
            y = Number(input[i + 2])
        }
        if(x < y){
            input[input[i+3]] = 1;
        }else{
            input[input[i+3]] = 0;
        }
        i = i + 4;
    }else if(input[i][input[i].length-1] == 8){
        if(first == 0){
            x = Number(input[input[i + 1]]);
        }else if(first == 1){
            x = Number(input[i + 1])
        }

        if(second == 0){
            y = Number(input[input[i + 2]]);
        }else if(second == 1){
            y = Number(input[i + 2])
        }
        if(x == y){
            input[input[i+3]] = 1;
        }else{
            input[input[i+3]] = 0;
        }
        i = i + 4;
    }
}