const btn = document.querySelector('button')
const input = document.querySelector('input')
const qr = document.querySelector('.image-container img')
const imgContainer = document.querySelector('.image-container')

function qrGenerator() {
    qr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value

}

btn.addEventListener('click', () => {
    if (input.value) {
        console.log('QR code is generated');
        qrGenerator()  // Apply height after image is loaded
        imgContainer.style.height = "auto"
        qr.style.marginBottom = "1rem";
        qr.style.marginTop = "1rem";
        input.style.marginBottom = "0px"
    } else {
        input.classList.add('empty-input')
        setTimeout(() => {
            input.classList.remove('empty-input')
        }, 1000)
    }
})
