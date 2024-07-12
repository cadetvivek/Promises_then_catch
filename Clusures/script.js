
// function parent(){
//     let a = 5;
//     let b = 7;
// // closure is access to the parent function variables 
//     function add(){
//         console.log(a+b)
//     }
//     return add
// }

// let add1 = parent();
// console.dir(add1)


function outerFunction(){
    let outerVariable = 'i am outer variables';
    function innerFunction(){
        console.log(outerVariable)
    }
    return innerFunction;
}

let output = outerFunction();
output()

