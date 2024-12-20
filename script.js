let i=0,imgArr=new Array();
imgArr[0] = "https://kpopping.com/documents/84/4/800/240413-SEVENTEEN-DK-Golden-Wave-in-Taiwan-documents-6.jpeg?v=73859"
imgArr[1] ="https://phinf.wevpstatic.net/MjAyNDA2MjhfMzAg/MDAxNzE5NTY1MDIzODM2.x6z4HGrQSkHDjeNAk__w7KXaS1kJvvsKizuWkl8WNnQg.O-SWbC8k9MCVYvP2qfJZAiqg3NRU_02A1ei3lG8J0jog.JPEG/f2881f4f-b406-49e6-974c-25b4b8844633.jpeg"
imgArr[2] ="https://i.pinimg.com/736x/6e/5c/a6/6e5ca6a5f9335ecfdd2a050276071d7a.jpg"
  
function showImg(){
 document.getElementById('ico').src = imgArr[i];
  i = (i+1) % 3 ;
}
function show(){
  setInterval(showImg,2000);
}