var fs = require('fs'),
    path = require('path'),    
    filePath = path.join(__dirname, 'input');

fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        let arr1 = data.split(',')
        for(var i = 0; i < 100; i++){
            for(var j = 0; j < 100; j++){
                
                arr1[1] = i;
                arr1[2] = j;
                
                if(solvePuzzle(arr1) == 19690720){
                    console.log((i * 100) + j)
                }

                
            }
        }
        
    } else {
        console.log(err);
    }
});

solvePuzzle = (arr1) => {
    let arr = [];
    for(var i = 0; i< arr1.length; i++){
        arr.push(arr1[i])
    }
    
    for(let i = 0; i < arr.length; i += 4){
        if(arr[i] == 1){
            let num = parseInt(arr[arr[i+1]]) + parseInt(arr[arr[i+2]]);
            arr[parseInt(arr[i+3])] = num
        }else if(arr[i] == 2){
            let num = parseInt(arr[arr[i+1]]) * parseInt(arr[arr[i+2]]);
            arr[parseInt(arr[i+3])] = num
        }else if(arr[i] = 99){
            
            return arr[0];
        }
    }
    
}

