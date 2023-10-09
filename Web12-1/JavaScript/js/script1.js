
var color=['blue','red','orange','yellow','pink','green','grey'];
var i=0;
var box='';
document.getElementById('btn_click').addEventListener('click',function(){
    box = `<div id="box1" class="box" style="background-color : ${color[i++]}; "></div>`;
    document.getElementById('parent').innerHTML = box;
    i = (i==color.length) ? 0 : i;
})