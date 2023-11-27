// this functions displays the menu and hide the push button

// function menu() {
//     document.getElementById('menu-items').style.display = "block";
//     document.getElementById('btn').style.display = "none";

// }

// This function allow you show and hide with same button
function menu() {
    let mobileBtn = document.getElementById("menu-items");
    if (mobileBtn.style.display === "flex") {
      mobileBtn.style.display = "none";
    } else {
      mobileBtn.style.display = "flex";
    }
  }


  const myString = new String ('developer');

  x = typeof myString;
  x = myString.length;
//   x = myString[0].toUpperCase();
//   z = typeof myString; a bit longer way
//   z = myString.length
//   z = myString.substring(1,9);
x = myString.replace('d','D') // much eaiser and faster way of solving 



console.log(x); // insert print Z if used the longer method 

// other solution 1:
// myNewstring = myString.charAt(0).toUpperCase() + myString.substring(1); and then cosole log it 
// All of the following are math oprerators and methods you can use 
// when you need to round numbers to the closest decimle or generate a random number


// Math.round Math.floor 
// x = Math.floor(Math.random() * 10 + 1); (this one will make number basic with no decimls))