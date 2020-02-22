// Setup End Date For Countdown (getTime == miliseconds)

let launchDate = new Date('May 28, 2020 12:00:00').getTime();


//  Setup timer to tick every 1 second

let time = setInterval(tick, 1000);


function tick() {

    // Get Current Time

    let now = new Date().getTime();

    // Get the difference in time

    let t = launchDate - now;

    // Check if time is above 0

    if (t > 0) {

        // Setup Days, Hours, Minutes and Seconds
        // Algorithm to calculate days..

        let days = Math.floor(t / (1000 * 60 * 60 * 24));

        // Prefix any number below 10 with "0"

        if (days < 0) { days = '0' + days; }

        // Algorithm to calculate hours..

        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        if (hours < 0) { hours = '0' + hours; }

        // Algorithm to calculate minutes..

        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));

        if (mins < 0) { mins = '0' + mins; }

        // Algorithm to calculate seconds..

        let secs = Math.floor((t % (1000 * 60)) / 1000);
        if (secs < 0) { secs = '0' + secs; }


        // Create Time String

        let time = `${days} : ${hours} : ${mins} : ${secs}`;

        // Set time on document

        document.querySelector('.countdown').innerText = time;

    }
}