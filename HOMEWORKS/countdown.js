function countdown() {
    let num = 10;

    function displayNumber() {
        console.log(num);
        num--;
        if (num >= 0) {
            setTimeout(displayNumber, 1000);
        }
    }

    displayNumber();
}
countdown();
