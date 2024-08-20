const imageContainerEl = document.querySelector(".image-container");
const btnEL = document.querySelector(".btn");

btnEL.addEventListener("click", () => {
    imageNum = 10;
    addNewImages(imageNum);
})

function addNewImages() {
    for (let i = 0; i < imageNum; i++) {
    const newImageEl = document.createElement("img");
    newImageEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
    imageContainerEl.appendChild(newImageEl);
    }
}