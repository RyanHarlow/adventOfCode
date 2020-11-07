var start = new Date().getTime();
var fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, 'input.txt');

fs.readFile(filePath, { encoding: 'utf-8' }, function(err, data) {
    if (!err) {
        solvePuzzle(data.split('\n'));
    } else {
        console.log(err);
    }
});

let solvePuzzle = (data) => {
    let dataObj = {};
    for (let i = 0; i < data.length; i++) {
        let orbit = data[i].split(')');

        dataObj[orbit[1]] = orbit[0]
    }
    santaPath = ["SAN"]
    santaObj = {};
    while (santaPath[santaPath.length - 1] != 'COM') {
        santaPath.push(dataObj[santaPath[santaPath.length - 1]])
        santaObj[dataObj[santaPath[santaPath.length - 1]]] = 1;
    }

    youPath = ['YOU']

    while (youPath[youPath.length - 1] != 'COM') {
        youPath.push(dataObj[youPath[youPath.length - 1]])
    }

    count = -1;

    for (var i = 1; i < youPath.length; i++) {
        if (santaObj[youPath[i]]) {
            console.log(count + santaPath.indexOf(youPath[i]))
            break
        }
        count++
    }



}