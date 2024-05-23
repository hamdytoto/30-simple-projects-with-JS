document.addEventListener("DOMContentLoaded", () => {
    const day = document.querySelector("#day");
    const hour = document.querySelector("#hour");
    const minutes = document.querySelector("#minute");
    const seconds = document.querySelector("#seconds");

    const getRemainTime = () => {
        const gap = new Date("Jan 1, 2025 00:00:00").getTime() - new Date().getTime();

        if (gap < 0) {
            day.innerHTML = hour.innerHTML = minutes.innerHTML = seconds.innerHTML = `0<span></span>`;
            return;
        }

        const s = 1000, m = s * 60, h = m * 60, d = h * 24;

        const format = (unit, label) => `${unit}<span>${label}${unit !== 1 ? 's' : ''}</span>`;

        day.innerHTML = format(Math.floor(gap / d), "day");
        hour.innerHTML = format(Math.floor((gap % d) / h), "hour");
        minutes.innerHTML = format(Math.floor((gap % h) / m), "minute");
        seconds.innerHTML = format(Math.floor((gap % m) / s), "second");
    };

    getRemainTime();
    setInterval(getRemainTime, 1000);
});
