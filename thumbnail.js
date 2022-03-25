let targetImage = document.querySelector("#smart-image");
console.log(targetImage)
targetImage.addEventListener("click", function() {
    this.classList.remove("small");
});