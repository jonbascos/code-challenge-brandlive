// Countdown Timer 

const endDate = new Date("Nov 03, 2021 10:00:00").getTime()

const timer = setInterval(() => {
    const now = new Date().getTime()
    const end = endDate - now

    if(end >= 0) {
        const days = Math.floor(end / (1000 * 60 * 60 * 24))
        const hours = Math.floor((end % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) 
        const mins = Math.floor((end % (1000 * 60 * 60)) / (1000 * 60))
        const secs = Math.floor((end % (1000 * 60)) / 1000)

        document.querySelector('#timerDays').innerHTML = days
        document.querySelector('#timerHours').innerHTML = hours
        document.querySelector('#timerMinutes').innerHTML = mins
        document.querySelector('#timerSeconds').innerHTML = secs
        }
    }, 1000)

/* Modal Popup */

// Grabs all modals

const modalBtns = document.querySelectorAll('.modal-open')

// Displays the modal for that profilePicture
modalBtns.forEach(btn => {
    btn.onclick = () => {
        const modal = btn.getAttribute("data-modal")
        document.getElementById(modal).style.display = "block"
    }
})

// Closes the modal when you click on the "close" button
const closeBtns = document.querySelectorAll('.modal-close')

closeBtns.forEach(btn => {
    btn.onclick = () => {
        const modal = btn.closest(".modal").style.display = 'none'
    }
})

// Closes modal when clicking anywhere on the screen on a desktop/laptop 
window.onclick = e => {
    if(e.target.className === 'modal') {
        e.target.style.display = 'none'
    } 
}

// Closes modal when tapping anywhere on the screen that isn't another modal on a mobile device.
window.ontouchstart = e => {
    if(e.target.className === 'modal') {
        e.target.style.display = 'none'
    } 
}