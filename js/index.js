const hour = document.querySelector("#hour")
const minute = document.querySelector("#minute")
const second = document.querySelector("#second")
const amPm = document.querySelector("#ampm")


const updateClock = () => {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    let ampm = "AM"

    if (h > 12) {
        h = h - 12
        ampm = "PM"
    }

    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s

    hour.innerHTML = h
    minute.innerHTML = m
    second.innerHTML = s
    amPm.innerHTML = ampm

}

setInterval(() => {
    updateClock()
}, 1000);

