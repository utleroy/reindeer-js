var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
var height = ["5'9", "5'10", "5'1", "5'7", "5'9", "6'3", "6'10", "7'2"];

var hohohoElement = document.getElementById("reindeer");

for (var i = 0; i < reindeer.length; i++) {
  console.log(reindeer[i] + " " + colors[i] + " " + height[i]); /*[i] runs the arrays through the loop*/
  hohohoElement.innerHTML += "<div>" + colors[i] + " " + reindeer[i] + " " + height[i] + "</div>";
}

// Your task is to loop through all the reindeer in the array, and add the name of the reindeer to the single HTML <div> element provided. The name of the reindeer should be prepended with the corresponding color from the other array.

// For example:

// Blue Dasher
// Red Dancer
// etc...