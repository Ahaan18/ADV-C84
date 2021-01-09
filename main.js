canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
bpic = "mars.jpg";
rpic = "rover.png";
rwidth = 100;
rheight = 90;
roverx = 10;
rovery = 10;
function canva(){
    bpicimg = new Image();
    bpicimg.onload = mars;
    bpicimg.src = bpic;
    rpicimg = new Image();
    rpicimg.onload = rov;
    rpicimg.src = rpic;
}
function mars(){
    ctx.drawImage(bpicimg,0,0,canvas.width,canvas.height);
}
function rov(){
    ctx.drawImage(rpicimg,roverx,rovery,rwidth,rheight);
}
window.addEventListener("keydown", keydownfunction);
function keydownfunction(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == '24')
{
up(); console.log("up"); }
if(keyPressed == '40')
{
down(); console.log("down"); }
}
function down(){
    if(rovery<=0){
        rovery = rovery + 10;
        console.log("When up arrow is pressed , x position of rover=" + roverx + " | Y position of rover " + rovery);
        mars(); rov(); } 
}
function up(){
    if(rovery>=0){
        rovery = rovery - 10;
        console.log("When up arrow is pressed , x position of rover=" + roverx + " | Y position of rover " + rovery);
        mars(); rov(); } 
        
}