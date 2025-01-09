const cardsCtn = document.querySelector(".body__main--cards")
const cards = document.querySelectorAll(".body__main--cards-image-pict")
const details = document.querySelectorAll(".body__main--details")

//console.log(details[1].id);

document.addEventListener("DOMContentLoaded", () => {
    details.forEach((detail) => {
        detail.style.display = "none"
    })
})

function hideAll(details) {
    details.forEach((el) => {el.style.display = "none"})
}

document.addEventListener('click', (e) => {
    hideAll(details)
    target = e.target.classList[1]
    for(const detail of details) {
        if(target == detail.id) { 
            detail.style.display = 'flex'
        }
    }    
})