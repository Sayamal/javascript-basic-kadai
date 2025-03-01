const textElement = document.getElementById('text');
const btnElement = document.getElementById('btn');

console.log(textElement);

console.log(btnElement);

btnElement.addEventListener('click',() => {

    setTimeout(() => {
        textElement.textContent = 'ボタンをクリックしました';
    }, 2000);
});