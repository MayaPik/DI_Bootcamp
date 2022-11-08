let paragraph = document.createElement('p');
paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula vitae turpis rutrum condimentum. Duis cursus nibh eros, eget euismod enim facilisis at. Sed vulputate justo non odio efficitur consectetur. Proin vel ligula a quam dictum dignissim. Aliquam hendrerit blandit nibh, ac lacinia ante malesuada at. Donec feugiat quam in tellus hendrerit aliquet. Vestibulum ornare nulla massa, ut imperdiet nisl sagittis quis. Donec ornare ante suscipit mi viverra vehicula. Cras magna lorem, aliquet aliquam nibh vel, pellentesque semper elit. Sed at arcu viverra, placerat odio vehicula, porttitor libero. Donec in ex vel eros rhoncus hendrerit eget at leo."
document.body.appendChild(paragraph);
paragraph.setAttribute('draggable', 'true');
paragraph.setAttribute('id', 'p')
paragraph.style.position = 'absolute'
paragraph.style.width = '200px'


paragraph.addEventListener('dragstart', dragStart);
function dragStart(event) {
  let style = window.getComputedStyle(event.target, null);
  event.dataTransfer.setData("text", (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ","  + (parseInt(style.getPropertyValue("top"),10) - event.clientY));
}


document.body.addEventListener('dragover', allowDrop);
function allowDrop(event) {
  event.preventDefault(); // Necessary. Allows us to drop.
}

document.body.addEventListener('drop', dragDrop);
function dragDrop(event) {
  event.preventDefault();
    let data = event.dataTransfer.getData("text").split(',');;
    console.log(data)
    paragraph.style.left = (event.clientX + parseInt(data[0],10)) + 'px';
    paragraph.style.top = (event.clientY + parseInt(data[1],10)) + 'px';
}
