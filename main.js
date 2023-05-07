noseX=0;
noseY=0;
difference=0;
rightWrist=0;
leftWrist=0;
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background("#87CEEB");
    textSize(difference);
    fill('#000000');
    text('Saanvi',50,200);
}

function modelLoaded(){
    console.log('PoseNet is initialized!');
}

function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);

    }
}

