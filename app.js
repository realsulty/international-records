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
//   z = typeof myString;
//   z = myString.length
//   z = myString.substring(1,9);
x = myString.replace('d','D') // much eaiser and faster way of solving 

console.log(x);