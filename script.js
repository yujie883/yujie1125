let i=0,imgArr=new Array();
imgArr[0] = "https://kpopping.com/documents/14/4/241123-Seventeen-DK-at-2024-MAMA-Awards-Day-3-documents-6.jpeg?v=fcdd9"
imgArr[1] ="https://www.pinkvilla.com/images/2024-06/861192119_svt-2.jpg"
imgArr[2] ="https://i.pinimg.com/736x/82/7b/43/827b43675e6d5626c16fac2aff0a5a85.jpg"
imgArr[3] ="https://i.pinimg.com/736x/b4/9e/7e/b49e7eed971d4a7c351537501251bc1c.jpg"  
function showImg(){
 document.getElementById('ico').src = imgArr[i];
  i = (i+1) % 4 ;
}
function show(){
  setInterval(showImg,2000);
}
let box = document.querySelector('.ncyu');
box.style = "background:black; color:white; top:10px;left:10px";
document.getElementById("btn").addEventListener("click",lee);
function lee(){
  document.getElementById("aa").innerHTML = "要放寒假了!";
  document.getElementById("aa").style.color = "red";
  document.getElementById("btn").innerHTML = "請按一下";
  document.getElementById("btn").style.color= "blue";
}