const funcObj = require('callback-source');

// let x = 3;
// funcObj.mystery(
//     function(x){
//         console.log(x);
//     }
// );

// funcObj.something(function(x) {
//     console.log(x);
// });

// for(let i=0; i< 20; i++){
//     funcObj.mangle(i, function(y){
//         console.log(i + ": " + y);
//     });
// }
// let y = 5;
// funcObj.complexReturn("Hello", "How are you?", function(x){
//     for(let i in x){
//         console.log(x[i]);
//     }
//     // console.log(x);
// });

// funcObj.waitUp(y, function(x){
//     console.log(x);
// });

// funcObj.whatIsIt(function(y){
//     y();
// })
let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
funcObj.arrRes(x, function(result){
    console.log(result);
})
