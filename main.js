noseX=0 ; 
noseY=0 ;
function preload () {
mus_img=loadImage("https://i.postimg.cc/4N5vb0rx/3-2-moustache-png-pic-removebg-preview.png");
}

function setup() {
canvas =createCanvas(500,500) ;
canvas.center() ;
video = createCapture(VIDEO) ;
video.hide() ;
poseNet = ml5.poseNet(video, modelLoaded) ;
poseNet.on('pose', gotPoses) ;
}

function draw() {
    image(video, 0,0,500,500);
    image(mus_img,noseX-117,noseY,100,100) ;
}
function save(){
    save('filter.png') ;
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
if(results.length>0)
{
    console.log(results) ;
    noseX = results[0].pose.nose.x ;
    noseY = results[0].pose.nose.y ;
    console.log("nose x =" + noseX);
    console.log("nose y =" + noseY);
}
}