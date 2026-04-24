const input = document.querySelector('#todo-input');
const btn = document.querySelector('#input-btn');
const list = document.querySelector('#todo-list');
const trashCanBtn = document.querySelector('#trashcan');
const trashCanList = document.querySelector('#trashcan-list')
let trashCanArray = [];

const addTodo = () => {
    const todoText = input.value;
    if (todoText.trim() === '') return;
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
                trashCanArray.push(todoText);
                listItem.remove();
            }, 1000)
        } else {
            clearTimeout(timeOutId);
        }
    })
    input.value = '';


}
btn.addEventListener('click', addTodo);

input.addEventListener('keydown', (e) => {
    if (e.key === "Enter" && !e.isComposing) {
        addTodo();
    }
})

trashCanBtn.addEventListener('click', () => {
    trashCanList.textContent = '';
    console.log(trashCanArray);

    for (let trashList of trashCanArray) {
        const trashListItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const span = document.createElement('span');
        span.textContent = trashList;
        trashListItem.appendChild(checkbox);
        trashListItem.appendChild(span);
        trashCanList.appendChild(trashListItem);

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                input.value = trashList;
                addTodo();
                trashListItem.remove();
                trashCanArray = trashCanArray.filter(todo => todo !== trashList);
            }
        })

    }

})