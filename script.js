const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const boxes = [box1, box2, box3];
const colors = ['red', 'green', 'blue', 'pink', 'yellow', 'aquamarine', 'silver', 'magenta']
const sizes = ['50px', '100px', '200px']


setInterval(() => {
    let n = boxes[Math.floor(Math.random() * boxes.length)]
    let c = colors[Math.floor(Math.random() * colors.length)]
    let s = sizes[Math.floor(Math.random() * sizes.length)]
    changeColor(n, c, s)

}, 1000);


function changeColor(element, color, size) {
    element.style.backgroundColor = color;
    element.style.width = size;
    element.style.height = size;

}
