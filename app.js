// this functions displays the menu and hide the push button

// function menu() {
//     document.getElementById('menu-items').style.display = "block";
//     document.getElementById('btn').style.display = "none";

// }

// This function allow you show and hide with same button
function menu() {
    let mobileBtn = document.getElementById("menu-items");
    if (mobileBtn.style.display === "block") {
      mobileBtn.style.display = "none";
    } else {
      mobileBtn.style.display = "block";
    }
  }


//   const myString = new String ('developer');

//   x = typeof myString;
//   x = myString.length;
// //   x = myString[0].toUpperCase();
// //   z = typeof myString; a bit longer way
// //   z = myString.length
// //   z = myString.substring(1,9);
// x = myString.replace('d','D') // much eaiser and faster way of solving 



// console.log(x); // insert print Z if used the longer method 

// other solution 1:
// myNewstring = myString.charAt(0).toUpperCase() + myString.substring(1); and then cosole log it 
// All of the following are math oprerators and methods you can use 
// when you need to round numbers to the closest decimle or generate a random number


// Math.round Math.floor 
// x = Math.floor(Math.random() * 10 + 1); (this one will make number basic with no decimls))



// const arr = [1,2,3,4,5]; JOB DONE $$ 

// x = arr;
// x = arr.push(6);
// x = arr.unshift(0);
// x = arr.reverse();
// console.log(x);

// const arr1 = [1,2,3,4,5];
// const arr2 = [5,6,7,8,9,10]; JOB DONE 


//  x = arr1.pop();

// x = [...arr1,...arr2];


// console.log(x);



// const library = [

//     {
//         title: 'MacLoovin',
//         author: 'Mac',
//         status:{
//             own: true,
//             reading: false,
//             read:false,
        
//         },
//     },
//     {
//         title: 'Big Think',
//         author: 'The Thinker',
//         status:{
//             own: true,
//             reading: false,
//             read:false,
        
//         },
//     },
//     {
//         title: 'Apple',
//         author: 'Steve Jobs',
//         status:{
//             own: true,
//             reading: false,
//             read: false
        
//         },
//     },
// ];

// step 2 Changed the read value 
// library[0].status.read = true;
// library[1].status.read = true;
// library[2].status.read = true;


// // use the curly bracket for destructruing 
// const { title : firstBook } = library[0];

// console.log(firstBook);

// // Turn this library into a JSON string

// const libraryJSON = JSON.stringify(library);

// console.log(libraryJSON);

// Arrow functions
const numbers = [1,2,3,4,5];

// Arrow function callback
numbers.forEach( n => console.log(n));