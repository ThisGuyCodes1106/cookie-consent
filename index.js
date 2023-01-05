const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const modalDiv = document.getElementById('modal-inner')
const declineBtn = document.getElementById('declineBtn')
const choiceBtns = document.getElementById('modal-choice-btns')

setTimeout(function() {
    modal.style.display = 'inline'
}, 2000)

modalCloseBtn.addEventListener("click", function() {
    modal.style.display = 'none'
})

declineBtn.addEventListener('mouseover', function() {
    choiceBtns.classList.toggle('reversed')
})

consentForm.addEventListener('submit', function(event) {
    event.preventDefault()

    const consentFormData = new FormData(consentForm)
    const userName = consentFormData.get('fullName')

    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="uploadText">
            Uploading your data to the dark web...
        </p>
    </div>`

    const uploadText = document.getElementById('uploadText')
    setTimeout(function() {
        uploadText.innerText = `Making the sale...`
    }, 1500)

    setTimeout(function() {
        modalDiv.innerHTML =  `
        <h2>Thanks <span class="modal-display-name">${userName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
        ` 
        modalCloseBtn.disabled = false
    }, 3000)
})