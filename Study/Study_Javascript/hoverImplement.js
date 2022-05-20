//이벤트 변환시마다 체크 addEventListener
var box = document.getElementByld('box');
//마우스 오버
box.addEventListener('mouseover', function(){
   box.removeAttribute('class');
})
//마우스 아웃
box.addEventListener('mouseout', function(){
   box.removeAttribute('class');
})
