let container = document.getElementById('about-me-image-container');
let image = document.getElementById('about-me-image');


const changeImage = () => {
image.style.display = "none";
container.innerHTML = 'Oops!!!'
}

image.addEventListener('click', changeImage);
//document.onclick = changeImage;