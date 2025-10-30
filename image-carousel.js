const imageCarouselDisplay = function(div, imageList) {
    //Initialize Image Carousel and creating a new div if none given or not found
    let currrentImageCarousel = div;
    
    if (!currrentImageCarousel) {
        currrentImageCarousel = document.createElement("div");
        currrentImageCarousel.classList.add("image-carousel")
    }

    //Create Image Carousel Structure
    const pictureFrame = document.createElement("img")
    pictureFrame.classList.add("picture-frame")
    pictureFrame.src = imageList[0]

    const carouselButtons = document.createElement("div")
    carouselButtons.classList.add("carousel-buttons")

    currrentImageCarousel.append(pictureFrame,carouselButtons)
}

const imageSrcList = [
    "./test-images/now-you-see-me-now-you-dont(2025).jpg",
    "./test-images/predator-badlands(2025).jpg",
    "./test-images/the-running-man(2025).jpg",
    "./test-images/wake-up-dead-man(2025).jpg",
    "./test-images/zootopia-2(2025).jpg"
]


const testDiv = document.querySelector(".image-carousel")
const test = new imageCarouselDisplay(testDiv, imageSrcList)
