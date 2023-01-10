document.addEventListener('DOMContentLoaded', ()=>{
    let resize = new ResizeObserver(handleSize);
    resize.observe(document.querySelector('.container')); 
});
 function handleSize(elements){
 let div = elements[0].target;
  if (elements[0].contentRect.width > 900){
    div.classList.add('big');
    addPhoto();
  }else{
    div.classList.remove('big');
    removePhoto();
  }
 }

 function addPhoto(){
    if (!document.querySelector(".two img")){
        let img = document.createElement("img");
        let rand = Math.floor(Math.random() * 100) + 100;
        img.src = `https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f"/${rand}?`;
        img.alt ="Random img";
        document.querySelector('.two p').appendChild(img);
    }
 }
 function removePhoto(){
    let img = document.querySelector(".two img");
    img?.parentElement.removeChild(img);

 }