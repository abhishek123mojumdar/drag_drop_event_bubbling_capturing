// Import stylesheets
import './style.css';

// Write Javascript code!

let dragFill = document.querySelector('.dragFill');
let boxes = document.querySelectorAll('.box');

dragFill.addEventListener('dragstart', startDragging);
dragFill.addEventListener('dragend', stopDragging);

function startDragging() {
  console.log(' I  am dragging the box');
  // this.className = '';
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}
function stopDragging() {
  console.log(' I stopped dragging the box');
  this.className = 'dragFill';
}

boxes.forEach((box) => {
  box.addEventListener('dragover', dragOver);
  box.addEventListener('dragenter', dragEnter);
  box.addEventListener('dragleave', dragLeave);
  box.addEventListener('drop', dragDrop);
});

function dragOver(e) {
  // console.log('dragover');
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  console.log('dragenter');
  this.className += ' hovered';
}
function dragLeave() {
  console.log('dragleave');
  this.className = 'box';
}
function dragDrop() {
  console.log('dropped');
  this.className = 'box';
  this.append(dragFill);
}

let parent = document.getElementById('pc');
let child = document.getElementById('cc');
let grandChild = document.getElementById('gcc');

// event bubbling
parent.addEventListener('click', () => {
  alert('parent');
});
child.addEventListener('click', () => {
  alert('child');
});
grandChild.addEventListener('click', (e) => {
  e.stopPropagation();
  alert('grandchild');
});

// event capturing
// parent.addEventListener(
//   'click',
//   () => {
//     alert('parent');
//   },
//   true
// );
// child.addEventListener(
//   'click',
//   () => {
//     alert('child');
//   },
//   true
// );
// grandChild.addEventListener(
//   'click',
//   (e) => {
//     e.stopPropagation();
//     alert('grandchild');
//   },
//   true
// );
