const input = document.querySelector('#todo-input');
const btn = document.querySelector('#input-btn');
const list = document.querySelector('#todo-list');


btn.addEventListener('click', () => {
    const todoText = input.value;
    if (todoText === '') return;
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    let timeOutId = null;
    const span = document.createElement('span');
    span.textContent = todoText;
    listItem.appendChild(checkbox);
    listItem.appendChild(span);
    list.appendChild(listItem);

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            timeOutId = setTimeout(() => {
                listItem.remove();
            }, 1000)
        } else {
            clearTimeout(timeOutId);
        }
    })
    input.value = '';


})
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const todoText = input.value;
        if (todoText === '') return;
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        let timeOutId = null;
        const span = document.createElement('span');
        span.textContent = todoText;
        listItem.appendChild(checkbox);
        listItem.appendChild(span);
        list.appendChild(listItem);

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                timeOutId = setTimeout(() => {
                    listItem.remove();
                }, 1000)
            } else {
                clearTimeout(timeOutId);
            }
        })
        input.value = '';

    }

});

