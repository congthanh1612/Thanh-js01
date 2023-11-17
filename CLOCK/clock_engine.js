function updateClock() {
    var now = new Date();
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday','Wednesday',  
                        'Thursday', 'Friday', 'Saturday'];
    var day = daysOfWeek[now.getDay()];
    var date = now.getDate();
    var monthsArr = ['January', 'February', 'March', 'April',
                    'May', 'June', 'July', 'August',
                    'September', 'October', 'November', 'December'];
    var month = monthsArr[now.getMonth()];
    document.getElementById('day').textContent = `${day}, ${date} ${month}`;

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    document.getElementById('time').textContent = `${formatTime(hours)}:${formatTime(minutes)}`;

    var hourRotation = (360 / 12) * (hours % 12) + (360 / 12) * (minutes / 60);
    var minuteRotation = (360 / 60) * minutes + (360 / 60) * (seconds / 60);
    var secondRotation = (360 / 60) * seconds;

    document.getElementById('hour-hand').style.transform = `rotate(${hourRotation}deg)`;
    document.getElementById('minute-hand').style.transform = `rotate(${minuteRotation}deg)`;
    document.getElementById('second-hand').style.transform = `rotate(${secondRotation}deg)`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);

updateClock();