var start = new Date().getTime();
var fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, 'input.txt');

fs.readFile(filePath, { encoding: 'utf-8' }, function(err, data) {
    if (!err) {
        solvePuzzle(data);
    } else {
        console.log(err);
    }
});

solvePuzzle = (input) => {
    let inputArr = input.split('\n');
    let count = 0;
    for (let i = 0; i < inputArr.length; i++) {
        let lineArr = inputArr[i].split(' ');
        let minNum = lineArr[0].split('-')[0];
        let maxNum = lineArr[0].split('-')[1];
        let letter = lineArr[1][0];
        let pass = lineArr[2];
        let letterCount = 0;
        if ((pass[minNum - 1] == letter && pass[maxNum - 1] != letter) || (pass[minNum - 1] != letter && pass[maxNum - 1] == letter)) {
            count++;
        }
    }
    console.log(count)
}