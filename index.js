const hourE1=document.querySelector(".hour");
const minuteE1=document.querySelector(".minute");
const secondE1=document.querySelector(".second");

function updateclock(){
    const currentDate=new Date();
    setTimeout(updateclock,1000);

const hour=currentDate.getHours();
const mintue=currentDate.getMintues();
const second=currentDate.getSeconds();
const hourDeg=(hour/ 12)*360;
hourE1.style.transform= 'rotate(${hourDeg}deg)';
const mintueDeg=(mintue/ 60)*360;
mintueE1.style.transform= 'rotate(${mintueDeg}deg)';
const secondDeg=(second/ 60)*360;
secondE1.style.transform= 'rotate(${secondDeg}deg)';
}
  
setInterval(updateclock, 1000);


