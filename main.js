song="";
scoreright=0;
scoreleft=0;

leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;

function preload(){
song=loadSound("Sunflower.mp3");
}
function setup() {
    canvas = createCanvas(560, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function modelLoaded(){
console.log("Posenet is on")
}
function draw(){
    image(video,0, 0, 560, 450);
}
function gotPoses(results){
if (results.length >0){
   console.log(results);
}
}
function DG_rock(){
    song.play();
    song.setVolume(1);
    song.rate(1)
}