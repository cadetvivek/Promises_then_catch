// const p = new Promise((resolve,reject)=>{
// resolve({name:'vivek'})
// })





// const p = new Promise((resolve,reject)=>{
// reject('you are rejected')
// })






// const p = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//   resolveBtn({name:'vivek'})

//     },4000)
// })





// const p = new Promise((resolve,reject)=>{
// resolve({name:'vivek'})
// })



//     const resolveBtn = document.querySelector('#resolve-btn');
//     const p = new Promise((resolve,reject)=>{
      
//     resolveBtn.addEventListener('click',()=>{
//         resolve('you are Resolved')
//     })// this is till pending when we will not click on button
// })







// const resolveBtn = document.querySelector('#resolve-btn');
// const rejectBtn = document.querySelector('#reject-btn');

// const p = new Promise((resolve,reject)=>{
  
// resolveBtn.addEventListener('click',()=>{
//     resolve('you are Resolved')
// })// this is till pending when we will not click on button
// })

// p.then(()=>{
//     console.log("hiii") // you of then we print before resolve when we click it's show hiii
//     // when promise is resolve after call then and print first Hiii after print 'you are resolve'
// })








// const resolveBtn = document.querySelector('#resolve-btn');
// const rejectBtn = document.querySelector('#reject-btn');

// const p = new Promise((resolve,reject)=>{
  
// resolveBtn.addEventListener('click',()=>{
//     resolve('you are Resolved')
// })

// rejectBtn.addEventListener('click',()=>{
//     reject('you are reject')
// })
// })

// p.then(()=>{
//     console.log("hiii")  // when we click on resolve we get then hii)
// }).catch(()=>{
//     console.log('reject throw the catch')// when we click on reject we show this error massage
//     // the use of catch when we clck on reject we get error if we are 
//     // usign catch method we replace red error we can show catch error
// })

///////////////////////////////////////////////////////////////////////////////////////

// // we can show actual massage and error using this method
// p.then((data)=>{// this is a microtask queue first proity 
//     console.log(data) 
// }).catch((err)=>{
//     console.log(err)
// })

