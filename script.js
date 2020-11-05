var title = document.getElementById("title");
var nameInput = document.getElementById("nameInput");
var titleChangeButton = document.getElementById("name-button");
var numInput = document.getElementById("numInput");
var calculateButton = document.getElementById("calculate-button");

calculateButton.addEventListener("click", halfNumber);
titleChangeButton.addEventListener("click", fortune);



function halfNumber(){
  var num = numInput.value;
  console.log("Half of " + num + " is " + num/2 + ".");
  alert(num/2);
}

function fortune(){
  var list1 = ["website", "lamma", "pen", "pillow", "cup","cat", "tomato", "day", "song", "gum"];
  var randomIndex = Math.floor(Math.random() * list1.length)
  var name = nameInput.value;
  title.innerHTML = "This is " +name + "'s "+list1[randomIndex];
  restyle();
}

function restyle(){
  var r = Math.random() * 255;
  var g = Math.random() * 255;
  var b = Math.random() * 255;
  var color = "rgb(" + r + "," + g + "," + b+")";
  title.style.color = color;
  var fonts = ["Arial","Helvetica","Verdana","Trebuchet MS","Gill Sans","Noto Sans","Avantgarde","Optima","Arial Narrow","OCR A Std","Brush Script MT","Trattatello"];
  var randomIndex1 = Math.floor(Math.random() * fonts.length);
  title.style.fontFamily = fonts[randomIndex1];
  var styles = ["normal","italic","oblique"];
  var randomIndex2= Math.floor(Math.random() * styles.length);
  title.style.fontStyle = styles[randomIndex2];
}
