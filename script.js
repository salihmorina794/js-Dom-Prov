// denna funktion gör att man kan byta bakrunds färgen på hemsidan till blå
function changebg(){
    document.getElementById("container").style.backgroundColor = "blue";
}
// denna funktion gör så att en rubrik kommer upp på hemsidan
function vibes(){
    document.getElementById("vibe").innerHTML = "Be the best version of you!";
}
// denna funktion gör så att en paragraf kommer upp på hemsidan med dagens datum
function get_time(){
    document.getElementById("time").innerHTML = Date();
}
// denna funktion gör att man kan byta bild med en knapp som heter changepicture
function changeimg(){
    document.getElementById("img").src="imgs/New York City_GettyImages-1347979016.webp";
}
// denna funktion gör så att man kan gömma bilden
function hideimg(){
    document.getElementById("img").style.display = "none";
}
// denna funktion gör så att man kan visabilden efter man gömmt bilden
function showimg(){
    document.getElementById("img").style.display = "";
}
//denna funktion gör att man får en header med färgen grå och centrar allt inehåll i headern
function header(){
    document.getElementById("header_c").style.backgroundColor = "grey";
    document.getElementById("header_c").style.justifyContent = "center";
}
// denna funktion gör så att man kan gömma headern
function remove_header(){
    document.getElementById("header_c").style.backgroundColor = "";
    document.getElementById("header_c").style.justifyContent = "";
}
// denna funktion gör att man kan visa headern igen
function show_header(){
    document.getElementById("header_c").style.backgroundColor = "grey";
    document.getElementById("header_c").style.justifyContent = "center";
}
