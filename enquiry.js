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
<h2>Tourist Enquiry</h2>

<form onsubmit="submitForm()">

<input type="text" placeholder="Enter Name" required><br><br>

<input type="email" placeholder="Enter Email" required><br><br>

<textarea placeholder="Your Message"></textarea><br><br>

<button type="submit">Submit</button>

</form>
