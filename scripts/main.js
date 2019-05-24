let arr = [11,'kek','lol',2,5,'gusi',2,4,55,[1,4],90,['trryr',7,'dkafdsfdsdf',4],100,[9,'sss']];

let numbers = [];
let strings = [];
let counter = 0;

for(let i = 0; i < arr.length; i++){
    
        if(typeof arr[i] == 'number'){
            numbers.push(arr[i]);
        } else if(typeof arr[i] == 'string'){
            strings.push(arr[i]);
        } else if(typeof arr[i] == 'object'){
            let subdata = arr[i];

            for(let k = 0; k < subdata.length; k++){
                // counter++;
                if(typeof subdata[k] == 'number'){
                    numbers.push(arr[k]);
                    // console.log("проверка на вход в массив: " + subdata[k]);
                } else if(typeof subdata[k] == 'string'){
                    strings.push(subdata[k]);
                }
            }
        }

    
}
console.log("counter" + counter);
console.log('nubmers: ');
for( let kek = 0; kek < numbers.length; kek++){
    console.log(numbers[kek]);
}
console.log('strings: ');
for( let kek2 = 0; kek2 < strings.length; kek2++){
    console.log(strings[kek2]);
}


