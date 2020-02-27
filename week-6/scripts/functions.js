// document is the owner of everything else on your webpage
// to access the button's id we use the getElementById method 
// we use addEventListener method to listen for a click on the button
// we invoke our function 'showHeart'

document.getElementById("button").addEventListener("click", showHeart);

// we create our function by giving it a name in camelcase 'showHeart'
// we use the innerHTML method to add text to our div with id 'heart-box'

function showHeart() {
  document.getElementById("heart-box").innerHTML = "<3";
}