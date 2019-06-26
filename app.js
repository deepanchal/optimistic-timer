document.getElementById('datePicker').valueAsDate = new Date();
document.getElementById("timePicker").value = "23:59:59";

let datePicker = new Date($('#datePicker').val());
let timePicker = $('#timePicker').val();
console.log(timePicker);
let day = datePicker.getDate() + 1;
let month = datePicker.getMonth() + 1;
let year = datePicker.getFullYear();
let hour = timePicker.getHours();
let min = timePicker.getMinutes();

console.log(day, month, year, hour, min);

$('#submit').on('click', function () {
    $('.displayTime').css('display', 'block');
    let countDownDate = new Date($('#datePicker').val());
    let countDownTimer = new Date($('#timePicker').val());
    console.log(countDownDate.getDate() + 1, countDownDate.getMonth() + 1, countDownDate.getHours(), countDownTimer.getHours(), );
    
    // setInterval(() => {
    //     let now = new Date().getTime();
    //     $('.displayTime').text(now);
    // }, 1);
});

function startTimer() {
    let show = setInterval(() => {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(show);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
}