let countDownDate, timerVar;
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
let rangeVal = Number($('#customRange').val());
document.getElementById('datePicker').valueAsDate = new Date();

$('#submit').on('click', function () {
    let datePicker = new Date($('#datePicker').val());
    let timePicker = $('#timePicker').val();
    //Very Important line for extracting input and creating a new date
    //Total hours wasted: 20
    countDownDate = new Date(`${monthNames[datePicker.getMonth()]} ${datePicker.getDate() + 1}, ${datePicker.getFullYear()} ${timePicker}`);

    stopTimer();
    startTimerFor(rangeVal);
    $('#timerStats').css('display', 'block');
});

$('#customRange').on('input', function () {
    stopTimer();
    rangeVal = Number($('#customRange').val());
    startTimerFor(rangeVal);
});

function startTimerFor(num) {
    timerVar = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate.getTime() - now;

        //Storing all values
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + (days * 24);

        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let maxMin = (hours * 60) + minutes;

        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        let maxSeconds = (maxMin * 60) + seconds;

        let milliseconds = Math.floor((distance % 1000));
        let maxMilli = (maxSeconds * 1000) + milliseconds;

        // let microseconds = maxMilli * 1000;

        switch (num) {
            case 1:
                $('.displayTime').text(`${hours} hours left`);
                break;
            case 2:
                $('.displayTime').text(`${maxMin} minutes left`);
                break;
            case 3:
                $('.displayTime').text(`${maxSeconds} seconds left`);
                break;
            case 4:
                $('.displayTime').text(`${maxMilli} milliseconds left`);
                break;
            case 5:
                $('.displayTime').text(`${maxMilli}000 microseconds left`);
                break;
            case 6:
                $('.displayTime').text(`${maxMilli}000000 nanoseconds left`);
                break;
            case 7:
                $('.displayTime').text(`${maxMilli}000000000 picoseconds left`);
                break;

            default:
                break;
        }

        if (distance < 0) {
            clearInterval(timerVar);
            $('.displayTime').text('Times Up :(');
        }
    }, 1);
}

function stopTimer() {
    clearInterval(timerVar);
}