const input = document.querySelector('#input');
const btn = document.querySelector('#count');

let items = document.querySelectorAll('.calc-item');
items = Array.from(items);

items.forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.target.id === 'count') {
            equal();
        }
        else if (e.target.id === 'clean') {
            clean();
        }
        else {
            let value = item.innerText;
            input.value += value;
        }
    });
});

let equal = () => {
    btn.addEventListener('click', () => {
        let value = eval(input.value);
        input.value = value;
    });
}

let clean = () => {
    input.value = '';
}

