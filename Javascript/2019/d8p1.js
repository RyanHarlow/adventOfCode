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

let solvePuzzle = (data) => {
    dataArr = data.split('');

    countArr = [];

    count = 0;
    while ()
        for (var i = 0; i < 150; i++) {

        }



}