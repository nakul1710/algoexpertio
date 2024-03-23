const start = document.getElementById('start');
const stop = document.getElementById('stop');
const count = document.getElementById('count');

start.addEventListener('click', StartTime);
start.addEventListener('click', StopTime);

let timerId
function StartTime() {
    window.setInterval(() => {
        count.textContent++;
    },500);
}
function StopTime() {
    clearInterval(timerId)
}