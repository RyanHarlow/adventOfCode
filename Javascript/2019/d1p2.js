var start = new Date().getTime();
var fs = require('fs'),
    path = require('path'),    
    filePath = path.join(__dirname, 'input');


fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        solvePuzzle(data);
    } else {
        console.log(err);
    }
});

solvePuzzle = (input) => {
    var count = 0
    let arr = input.split('\n');
    for(var i = 0; i < arr.length; i++){
        let fuel = calculateFuel(arr[i])
        count = count + fuel;
    }
    console.log(count)
    var end = new Date().getTime();
    console.log(end - start)
}

let calculateFuel = (input) => {

    let amount = Math.floor(input / 3) - 2;
    if(amount > 6){
        amount = amount + calculateFuel(amount)
        
    }
    return amount;
}