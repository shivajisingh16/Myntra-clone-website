let block=document.querySelectorAll('.block');
let details=document.querySelector('.details');
let colors=[' #3ebd1b','#3ebd1b','#452ff8','#ff3f6c','#3ebd1b'];
let hcolor=document.querySelector('.details h4');
function add(){
  details.style='display:flex';
  hcolor.style=`color=${colors[i]}`;
}
function remove(){
  details.style='display:none';
}
for(let i=0;i<block.length;i++){
  block[i].addEventListener('mouseover',add);
  
  block[i].addEventListener('mouseout',remove);
}