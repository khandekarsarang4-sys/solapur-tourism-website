function enquiry(){
alert("Welcome to Solapur Tourism Website");
}
let images = [
"images/pandharpur1.jpg",
"images/pandharpur2.jpg",
"images/siddeshwar.jpg"
];

let i = 0;

function slider(){
document.getElementById("slide").src = images[i];
i++;
if(i == images.length){
i = 0;
}
}

setInterval(slider,2000);
