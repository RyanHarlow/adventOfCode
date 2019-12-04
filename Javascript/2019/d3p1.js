var fs = require('fs')
const util = require('util')


var input = fs.readFileSync('input', 'utf8');

var start = new Date().getTime();

input = input.split('\n');

let arr1 = input[0].split(',')
let arr2 = input[1].split(',')

let x = 0;
let y = 0;

let arr1Visted = {};
let arr2Visted = {};

for(i = 0; i < arr1.length; i++){
    var instruction = arr1[i];
    var num = Number(instruction.substr(1));
    var dir = instruction[0]
    if(dir == 'R'){
        for(var j = x; j < x + num; j++){
            let str = j + ' ' + y;
            arr1Visted[str] = true
        }
        x = x + num;
        
    }
    else if(dir == 'L'){
        for(var j = x; j > x - num; j--){
            let str = j + ' ' + y;
            arr1Visted[str] = true
            
        }
        x = x - num;
    }
    else if(dir == 'U'){
        for(var j = y; j < y + num; j++){
            let str = x + ' ' + j;
            arr1Visted[str] = true
            
        }
        y = y + num;
    }
    else if(dir == 'D'){
        for(var j = y; j > y - num; j--){
            let str = x + ' ' + j;
            arr1Visted[str] = true
            
        }
        y = y - num;
    }
    
}

    x = 0;
    y = 0;

for(i = 0; i < arr2.length; i++){
    var instruction = arr2[i];
    var num = Number(instruction.substr(1));
    var dir = instruction[0]
    if(dir == 'R'){
        for(var j = x; j < x + num; j++){
            let str = j + ' ' + y;
            arr2Visted[str] = true
        }
        x = x + num;
        
    }
    else if(dir == 'L'){
        for(var j = x; j > x - num; j--){
            let str = j + ' ' + y;
            arr2Visted[str] = true
            
        }
        x = x - num;
    }
    else if(dir == 'U'){
        for(var j = y; j < y + num; j++){
            let str = x + ' ' + j;
            arr2Visted[str] = true
            
        }
        y = y + num;
    }
    else if(dir == 'D'){
        for(var j = y; j > y - num; j--){
            let str = x + ' ' + j;
            arr2Visted[str] = true
            
        }
        y = y - num;
    }
    
}

let arrayObj = Object.keys(arr1Visted);
let arrayObj2 = Object.keys(arr2Visted);

let min = Infinity;

for(var i = 0; i < arrayObj.length; i++){
    if(arr2Visted[arrayObj[i]]){
        var coor = arrayObj[i].split(' ');
        coor[0] = Math.abs(Number(coor[0]));
        coor[1] = Math.abs(Number(coor[1]));
        if(coor[0] + coor[1] > 0 && coor[0] + coor[1] < min){
            min = coor[0] + coor[1];
        }


    }
}
console.log(min)


var end = new Date().getTime();
var time = end - start;
console.log(time)