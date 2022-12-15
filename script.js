const logo = document.getElementsByClassName('scaffoLogo')
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
})

lightbox.addEventListener('click', e => {
    if(e.target !== e.currentTarget) return 
    lightbox.classList.remove('active')
})



const toggleButton = document.getElementsByClassName('toggle-button')[0]
const containerLinks = document.getElementsByClassName('container-links')[0]

toggleButton.addEventListener('click', e => {
    containerLinks.classList.toggle('active')
     if (e.target !== e.currentTarget) return
    toggleButton.classList.remove('active')
})