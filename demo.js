let x;
let rangeVal = Number($('#customRange').val());
document.getElementById('datePicker').valueAsDate = new Date();
document.getElementById("timePicker").value = "23:59:59";
// Set the date we're counting down to
const countDownDate = new Date(2020, 11, 20, 10, 59, 59, 30).getTime();

$('#submit').on('click', function () {
    stopTimer();
    startTimerFor(rangeVal);
    $('.displayTime').css('display', 'block');
});

$('#customRange').on('input', function () {
    stopTimer();
    $('.displayTime').css('display', 'block');
    rangeVal = Number($('#customRange').val());
    startTimerFor(rangeVal);
});

function startTimerFor(num) {
    x = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        // console.log(countDownDate, now, distance);

        //Storing all values
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let maxMin = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) * 60 + minutes;

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

    }, 1);
}

function stopTimer() {
    clearInterval(x);
}

// var x = setInterval(function () {

//     // Get today's date and time
//     var now = new Date().getTime();

//     // Find the distance between now and the count down date
//     var distance = countDownDate - now;

//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

//     // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var maxMin = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) * 60 + minutes;

//     // var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//     var maxSeconds = (maxMin * 60) + seconds;

//     var milliseconds = Math.floor((distance % 1000));
//     var maxMilli = (maxSeconds * 1000) + milliseconds;
//     var microseconds = distance;

//     // Display the result in the element with id="demo"
//     $('.displayTime').text(`${hours} h ${maxMin} m  ${maxSeconds} s   ${maxMilli} ms `);

//     // If the count down is finished, write some text
//     if (distance < 0) {
//         clearInterval(x);
//         $('.displayTime').text("Times Up");
//     }
// }, 1);