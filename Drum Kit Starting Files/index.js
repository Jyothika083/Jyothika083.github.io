var arr=document.querySelectorAll("button");
function makesound(drumsound)
{
    switch(drumsound)
        {
            case 'w':var w1=new Audio("sounds/crash.mp3");
                    w1.play();
                    break;
            case 'a':var a1=new Audio("sounds/kick-bass.mp3");
                    a1.play();
                    break;
            case 's':var s1=new Audio("sounds/snare.mp3");
                    s1.play();
                    break;
            case 'd':var d1=new Audio("sounds/tom-1.mp3");
                    d1.play();
                    break;
            case 'j':var j1=new Audio("sounds/tom-2.mp3");
                    j1.play();
                    break;
            case 'k':var k1=new Audio("sounds/tom-3.mp3");
                    k1.play();
                    break;
            case 'l':var l1=new Audio("sounds/tom-4.mp3");
                    l1.play();
                    break;
            default:

        }
}

for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    arr[i].addEventListener("click",function()
    {
        makesound(this.innerHTML);
        buttonanimator(this.innerHTML);
    });
}
document.addEventListener("keypress",function(event)
{
    makesound(event.key);
    buttonanimator(event.key);
});

function buttonanimator(currkey)
{
    var activebutton=document.querySelector("."+currkey);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100);

}

