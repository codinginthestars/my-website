const imageElement = document.getElementById("my-pic");

function togglePictures() {
    

    if (imageElement.src == "http://127.0.0.1:5500/images/my-pic1.jpg") {
        imageElement.src = "http://127.0.0.1:5500/images/my-pic2.jpg";
    } else {
        imageElement.src = "http://127.0.0.1:5500/images/my-pic1.jpg";
    }
}

imageElement.addEventListener('click', () => 
    togglePictures()
);