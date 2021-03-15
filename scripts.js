
//Get the button
var BtnTOP = document.getElementById("BtnScrollTOP");
var BtnBTM = document.getElementById("BtnScrollBTM");
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