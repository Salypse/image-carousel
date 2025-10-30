const imageCarouselDisplay = function(div, imageList) {
    //Initialize Image Carousel and creating a new div if none given or not found
    let currrentImageCarousel = div;
    let currentImageIndex = 0;

    if (!currrentImageCarousel) {
        currrentImageCarousel = document.createElement("div");
        currrentImageCarousel.classList.add("image-carousel")
    }

    //Create Image Carousel Structure
    const pictureFrame = document.createElement("img")
    pictureFrame.classList.add("picture-frame")
    pictureFrame.src = imageList[currentImageIndex]

    const carouselButtons = document.createElement("div")
    carouselButtons.classList.add("carousel-buttons")

    const previousImageButton = document.createElement("button")
    previousImageButton.classList.add("previous-image")
    previousImageButton.textContent = "<-"
    previousImageButton.addEventListener("click", () => {
        displayPreviousImage(currentImageIndex)
        updateButtonNav(currentImageIndex)
    })

    const nextImageButton = document.createElement("button")
    nextImageButton.classList.add("next-image")
    nextImageButton.textContent = "->"
    nextImageButton.addEventListener("click", () => {
        displayNextImage(currentImageIndex)
        updateButtonNav(currentImageIndex)
    })

    const imageButtonsDiv = document.createElement("div")
    imageButtonsDiv.classList.add("image-buttons")

    imageList.forEach((image, index) => {
        const imageButton = document.createElement("button")
        imageButton.style.width = "1rem"
        imageButton.style.height = "1rem"
        imageButton.style.borderRadius = "50%"

        imageButton.addEventListener("click", () => {
            pictureFrame.src = image
            currentImageIndex = index
            updateButtonNav(currentImageIndex)
        })

        imageButtonsDiv.append(imageButton)
    })

    updateButtonNav()

    carouselButtons.append(
        previousImageButton,
        imageButtonsDiv,
        nextImageButton,
    )

    currrentImageCarousel.append(pictureFrame,carouselButtons)

    
    function displayNextImage() {
        currentImageIndex = (currentImageIndex === imageList.length - 1) ? 0 : currentImageIndex + 1
        pictureFrame.src = imageList[currentImageIndex]
    }

    function displayPreviousImage() {
        currentImageIndex = currentImageIndex === 0 ? (imageList.length - 1) : currentImageIndex - 1
        pictureFrame.src = imageList[currentImageIndex]
    }



    function updateButtonNav() {
        const navButtons = imageButtonsDiv.children
        
        for (let i = 0; i < navButtons.length; i++) {
            navButtons[i].style.backgroundColor = i === currentImageIndex ? "gray" : ""
        }
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
