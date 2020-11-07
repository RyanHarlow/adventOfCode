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
    console.log(data)
    let dataObj = {};
    for (let i = 0; i < data.length; i++) {
        let orbit = data[i].split(')');
        if (dataObj[orbit[0]] == undefined) {
            dataObj[orbit[0]] = [orbit[1]]
        } else {
            dataObj[orbit[0]].push(orbit[1]);
        }
    }
    console.log(dataObj['COM'])
    let orbitCount = 0;
    let levelCount = 1;
    let planetArray = ['COM'];

    while (planetArray) {
        let newPlanetArray = [];
        for (i = 0; i < planetArray.length; i++) {
            if (dataObj[planetArray[i]]) {
                orbitCount = orbitCount + (levelCount * dataObj[planetArray[i]].length)
                newPlanetArray = [...newPlanetArray, ...dataObj[planetArray[i]]]
            }
        }
        planetArray = [...newPlanetArray]
        levelCount = levelCount + 1;
        console.log(orbitCount)
    }
}