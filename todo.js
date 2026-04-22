const input = document.querySelector('#todo-input');
const btn = document.querySelector('#input-btn');
const list = document.querySelector('#todo-list');

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