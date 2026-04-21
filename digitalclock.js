const timer = document.querySelector('#timer');

const nowTime = setInterval(() => {
    const now = new Date();
    const hour = now.getHours().toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');
    const second = now.getSeconds().toString().padStart(2, '0');
    timer.textContent = `${hour}:${minute}:${second}`;
}, 1000)


