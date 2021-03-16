
//Get the button
var BtnTOP = document.getElementById("BtnScrollTOP");
var BtnBTM = document.getElementById("BtnScrollBTM");
var BtnFOLD = document.getElementById("BtnToggleFOLD")
var ScrnHeight = document.documentElement.scrollHeight;

// When the user clicks on the button, scroll to the top of the document
function FnScrollTOP() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function FnScrollBTM() {
    document.body.scrollTo(0,ScrnHeight); // For Safari
    document.documentElement.scrollTo(0,document.scrollHeight); // For Chrome, Firefox, IE and Opera
}

// Set display to "none" for element id:theFold if it is showing, and vice versa
function ToggleFOLD() {
    
    var theFold = document.getElementById("theFold")

    if (theFold.style.display === "none") {
    theFold.style.display = "block";
  } else {
    theFold.style.display = "none";
  }
    
}
