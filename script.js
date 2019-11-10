function moveLeft() {
    let timeline = document.getElementById('timeline');
    timeline.scrollBy(-100, 0);
    console.log('left');
}

function moveRight() {
    let timeline = document.getElementById('timeline');
    timeline.scrollBy(100, 0);
    console.log('right');
}

function navigateBox(index) {
    console.log('clicked' + index);
    // let box = document.getElementById('box' + index);
    // console.log(box.style.background = 'red');
    for (let i = 1; i <= 6; i++) {
        let box = document.getElementById('box' + i);
        box.style.background = '#fff';
    }
    for (let i = 1; i <= index; i++) {
        let box = document.getElementById('box' + i);
        box.style.background = 'red';
    }
}