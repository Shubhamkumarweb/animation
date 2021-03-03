const canvas=document.querySelector('canvas');
const circle=document.getElementById("circle");
var i=1;
const round=()=>{
for(var i=1;i<15;i++)
{
    const box=document.getElementById(`${i}`);
    box.style.width=`${600-i*40}px`;
    box.style.height=`${600-i*40}px`;
}

}
const rotate=setInterval(()=>{
    const box=document.getElementById(`${i}`);
    i++;
    box.classList.add('round');
    if(i==15)
    {
        clearInterval(rotate);
        console.log("stopped")
    }
},10)