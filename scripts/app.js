console.log('Running...')

// Countdown Timer 

let endDate = new Date("Nov 03, 2021 10:00:00").getTime()

let timer = setInterval(() => {
    let now = new Date().getTime()
    let end = endDate - now

    if(end >= 0) {
        let days = Math.floor(end / (1000 * 60 * 60 * 24))
    let hours = Math.floor((end % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) 
    let mins = Math.floor((end % (1000 * 60 * 60)) / (1000 * 60))
    let secs = Math.floor((end % (1000 * 60)) / 1000)

    document.querySelector('.timer-days').innerHTML = days
    document.querySelector('.timer-hours').innerHTML = hours
    document.querySelector('.timer-minutes').innerHTML = mins
    document.querySelector('.timer-seconds').innerHTML = secs
    }

    
}, 1000)