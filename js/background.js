const images =["image1.jpg","image2.jpg","image3.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage= document.createElement("img");

bgImage.src=`image/${chosenImage}`;

document.body.appendChild(bgImage);