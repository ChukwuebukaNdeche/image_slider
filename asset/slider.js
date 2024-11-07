const galleryContainer = document.querySelector('.gallery_container');
const galleryControlsContainer = document.querySelector('.gallery_controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery_item');

class carousel {
    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery_item1');
            el.classList.remove('gallery_item2');
            el.classList.remove('gallery_item3');
            el.classList.remove('gallery_item4');
            el.classList.remove('gallery_item5');
        })

        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`gallery_item${i+1}`); 
        })
    }

    setCurrentState(direction) {
        if (direction.classList == "gallery_controlsprevious") {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    setControls() {
        this.carouselControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement("button")).className = `gallery_controls${control}`;
            document.querySelector(`.gallery_controls${control}`).innerText = control;
        })
    }
    useControls() {
        const triggers = [...galleryControlsContainer.childNodes]
        triggers.forEach(control => {
            control.addEventListener("click", e => {
                e.preventDefault();
                this.setCurrentState(control);
            })
        })
    }
}

const exampleCarousel = new carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();