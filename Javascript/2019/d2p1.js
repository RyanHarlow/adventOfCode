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
    let arr = input.split(',')
    
    for(let i = 0; i < arr.length; i += 4){
        if(arr[i] == 1){
            let num = parseInt(arr[arr[i+1]]) + parseInt(arr[arr[i+2]]);
            arr[parseInt(arr[i+3])] = num
        }else if(arr[i] == 2){
            let num = parseInt(arr[arr[i+1]]) * parseInt(arr[arr[i+2]]);
            arr[parseInt(arr[i+3])] = num
        }else if(arr[i] = 99){
            console.log(arr);
            break;
        }
    }
    
}

