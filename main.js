leftWristX=0;
rightWristX=0;
difference=0;
function preload(){

}
function setup(){
canvas=createCanvas(550,450);
canvas.position(560,150);
video=createCapture(VIDEO);
video.size(550,550);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotresults);
}
function draw(){
    background('#FF0000');
    textSize(difference);
    fill('#FFFFFF');
    text('Aarav',50,200);
    document.getElementById("square_side").innerHTML="Font size of the text = "+difference+" px";
}
function modelLoaded(){
    console.log("model loaded");
}
function gotresults(results){
  if(results.length>0){
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    console.log(difference);
  }
}