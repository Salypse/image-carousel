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

    const previousImageButton = document.createElement("button")
    previousImageButton.classList.add("previous-image")
    previousImageButton.textContent = "<-"
    previousImageButton.addEventListener("click", () => {
        displayPreviousImage(findCurrentImageIndex())
    })

    const nextImageButton = document.createElement("button")
    nextImageButton.classList.add("next-image")
    nextImageButton.textContent = "->"
    nextImageButton.addEventListener("click", () => {
        displayNextImage(findCurrentImageIndex())
    })

    carouselButtons.append(
        previousImageButton,
        nextImageButton,
    )

    currrentImageCarousel.append(pictureFrame,carouselButtons)

    
    function displayNextImage(startIndex) {
        startIndex = (startIndex === imageList.length - 1) ? 0 : startIndex + 1
        pictureFrame.src = imageList[startIndex]
    }

    function displayPreviousImage(startIndex) {
        startIndex = (startIndex === 0 ) ? (imageList.length - 1) : startIndex - 1
        pictureFrame.src = imageList[startIndex]
    }

    function findCurrentImageIndex() {
        return imageList.findIndex(image => pictureFrame.src.endsWith(image))
    }
}

const imageSrcList = [
    "/home/salypse/repos/image-carousel/test-images/now-you-see-me-now-you-dont(2025).jpg",
    "/home/salypse/repos/image-carousel/test-images/predator-badlands(2025).jpg",
    "/home/salypse/repos/image-carousel/test-images/the-running-man(2025).jpg",
    "/home/salypse/repos/image-carousel/test-images/wake-up-dead-man(2025).jpg",
    "/home/salypse/repos/image-carousel/test-images/zootopia-2(2025).jpg",
]


const testDiv = document.querySelector(".image-carousel")
const test = new imageCarouselDisplay(testDiv, imageSrcList)
