const box = document.getElementById('box');
const container = document.getElementById('container');
const moveButton = document.getElementById('moveButton');
let isBoxMoved = false;

function moveBox() {
    if (!isBoxMoved) {
        box.style.transform = 'translate(calc(100vw - 100px), 0)';
    } else {
        box.style.transform = 'translate(0, 0)';
    }
    isBoxMoved = !isBoxMoved;
}

moveButton.addEventListener('click', moveBox);

container.addEventListener('click', function(event) {
    if (event.target === container) {
        moveBox();
    }
});








