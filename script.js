// top animaition

var loader = document.querySelector("#loader")
setTimeout(() => {
    loader.style.top = "-100%"
}, 4000);


// menu animatiion



const paragraph = document.querySelector("#paragraph4")
const imgDiv = document.querySelector("#right4")
const headlinks = document.querySelectorAll(".headlink");
const runNow = () => {
    const element = document.querySelector("#default-active")
    let image = element.getAttribute("data-image")
    let text = element.getAttribute("data-p")

    element.style.borderLeft = "2.5px solid #ff431d"
    element.style.color = "white"

    paragraph.innerText = text
    paragraph.style.color = "#cbcbca"

    imgDiv.style.backgroundImage = `url(${image})`
}
runNow();



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});





const scroll = new LocomotiveScroll({  // using the locomotive
    el: document.querySelector('#main'),
    smooth: true
});




var elemC = document.querySelector('#elem-container');
var fixed = document.querySelector('#fixed-image')
elemC.addEventListener('mouseover', () => {
    fixed.style.scale = "1"
})

var elems = document.querySelectorAll('.elem')

elems.forEach(element => {
    element.addEventListener('mouseenter', () => {
        let image = element.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
});

elemC.addEventListener('mouseout', () => {
    fixed.style.scale = "0"
})

fixed.addEventListener('mouseover', () => {
    fixed.style.scale = "1"
})
fixed.addEventListener('mouseout', () => {
    fixed.style.scale = "0"
})























const deselectAll = () => {

    headlinks.forEach(element => {

        element.style.borderLeft = "2.5px solid #4d4c4b"
        element.style.color = "#4d4c4b"
        paragraph.style.color = "transparent"


    })
}






headlinks.forEach(element => {
    const showContent = () => {
        deselectAll()
        let image = element.getAttribute("data-image")
        let text = element.getAttribute("data-p")

        element.style.borderLeft = "2.5px solid #ff431d"
        element.style.color = "white"

        paragraph.innerText = text
        paragraph.style.color = "#cbcbca"

        imgDiv.style.backgroundImage = `url(${image})`

    }

    element.addEventListener("click", showContent)
})
