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
    })

    const nextImageButton = document.createElement("button")
    nextImageButton.classList.add("next-image")
    nextImageButton.textContent = "->"
    nextImageButton.addEventListener("click", () => {
        displayNextImage(currentImageIndex)
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
    let nextPictureInterval = setInterval(displayNextImage, 5000)

    
    function displayNextImage() {
        currentImageIndex = (currentImageIndex === imageList.length - 1) ? 0 : currentImageIndex + 1
        pictureFrame.src = imageList[currentImageIndex]
        updateButtonNav(currentImageIndex)
    }

    function displayPreviousImage() {
        currentImageIndex = currentImageIndex === 0 ? (imageList.length - 1) : currentImageIndex - 1
        pictureFrame.src = imageList[currentImageIndex]
        updateButtonNav(currentImageIndex)
    }



    function updateButtonNav() {
        const navButtons = imageButtonsDiv.children
        
        for (let i = 0; i < navButtons.length; i++) {
            navButtons[i].style.backgroundColor = i === currentImageIndex ? "gray" : ""
        }
    }
}
