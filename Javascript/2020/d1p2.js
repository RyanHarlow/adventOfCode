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
    let dataObj = {};

    for (let i = 0; i < inputArr.length; i++) {
        dataObj[inputArr[i]] = true;
    }
    for (let i = 0; i < inputArr.length; i++) {
        for (let j = i + 1; j < inputArr.length; j++) {
            if ((Number(inputArr[i]) + Number(inputArr[j])) < 2021) {
                if (dataObj[2020 - (Number(inputArr[i]) + Number(inputArr[j]))]) {
                    console.log((2020 - (Number(inputArr[i]) + Number(inputArr[j]))) * inputArr[i] * inputArr[j])
                    break;
                }
            }
        }
    }



    var end = new Date().getTime();
    console.log(end - start)
}