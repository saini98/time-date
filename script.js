var date_time = function() {
    let time = new Date();
    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let date = time.getDate();
    let month = time.toLocaleString('default', { month: 'short' })
    let year = time.getFullYear();



   if (hrs >= 12 && hrs <= 16) {
        document.getElementById("am_pm").innerHTML = "PM";
        document.getElementById("day").innerHTML = "Good Afternoon";
    } else if (hrs >= 17 && hrs <= 20) {
        document.getElementById("am_pm").innerHTML = "PM";
        document.getElementById("day").innerHTML = "Good Evening";
    } else if (hrs >= 21) {
        document.getElementById("am_pm").innerHTML = "PM";
        document.getElementById("day").innerHTML = "Good Night";
    } else if (hrs >= 5 && hrs <= 12) {
        document.getElementById("am_pm").innerHTML = "AM";
        document.getElementById("day").innerHTML = "Good Morning";
    } else if (hrs <= 4) {
        document.getElementById("am_pm").innerHTML = "AM";
        document.getElementById("day").innerHTML = "Good Morning";
    }
    hrs = hrs % 12;

    if (hrs < 10) { hrs = "0" + hrs; }
    if (min < 10) { min = "0" + min; }
    if (sec < 10) { sec = "0" + sec; }
    if (date < 10) { date = "0" + date; }
    if (month < 10) { month = "0" + month; }
    let am_pm = 0;




    document.getElementById("hrs").innerHTML = hrs;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("date").innerHTML = date;
    document.getElementById("month").innerHTML = month;
    document.getElementById("year").innerHTML = year;
    setTimeout(date_time);
}

date_time();
