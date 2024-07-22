// let leftClick = document.querySelectorAll('.leftSlide')
// leftClick.forEach(element => {
//     element.addEventListener("click", leftHeroSlider)
// })

// let rightClick = document.querySelectorAll('.rightSlide')
// rightClick.forEach(element => {
//     element.addEventListener("click", rightHeroSlider)
// })

// function rightHeroSlider() {
//     let items = document.querySelectorAll('.heroSection')
//     document.querySelector('.conteneurPrincipal').appendChild(items[0])
// }

// function leftHeroSlider() {
//     let items = document.querySelectorAll('.heroSection')
//     document.querySelector('.conteneurPrincipal').appendChild(items[items.length - 1])
// }


function showMenu () {
    let menu = document.querySelector ('.responsiveBurgerMenu')
    if (menu.classList.contains('showed')) {
        menu.classList.add('hidden')
        menu.classList.remove('showed')
    } else {
        menu.classList.remove('hidden')
        menu.classList.add('showed')
    }
}

function showCategoriesMenu () {
    
    let menuDesCategories = document.querySelector ('.menuDesCategories')
    let btnMenuCategories = document.querySelector ('.nosCategoriesMenuBtn')


    if (btnMenuCategories.classList.contains('up')) {
        // alert('upHono')
        btnMenuCategories.classList.remove('up')
        btnMenuCategories.classList.add('down')
        menuDesCategories.classList.remove('showedCategoriesMenu')
        menuDesCategories.classList.add('hiddenCategoriesMenu')
       
    } else {
        // alert('downHono')
        btnMenuCategories.classList.remove('down')
        btnMenuCategories.classList.add('up')

        menuDesCategories.classList.remove('hiddenCategoriesMenu')
        menuDesCategories.classList.add('showedCategoriesMenu')
    }
}