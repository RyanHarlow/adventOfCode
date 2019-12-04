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
    let letterArray = [];
    let i = 5;
    while(i < input.length){
        letterArray.push(input[i]);
            i = i + 49;
    }
    let letterArray2 = [];
    i = 36;
    while(i < input.length){
        letterArray2.push(input[i]);
            i = i + 49;
    }
    console.log(letterArray2)
}