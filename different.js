// Give me the list numbers between 1 to 30 divisible by 5

// for(let i = 1; i<=30; i++){
//     if(i % 5 === 0){
//         console.log(i)
//     }
// }


// for(let i = 1; i<=30; i++){
//     if(i % 5 === 0 || i % 3 === 0){
//         console.log(i)
//     }
// }

// for(let i = 1; i<=30; i++){
//     if(i % 5 === 0 && i % 3 === 0){
//         console.log(i)
//     }
// }


let sum = 0;
for(let i = 1; i<=30; i++){
    if(i % 5 === 0 || i % 3 === 0){
        console.log(i)
        sum += i;
       
    }
     
}

console.log(sum)