song = "";
song2 = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWrisY = 0;

function preload()
{
    song = loadSound("music.mp3");
    song2 = loadSound("fnaf4.mp3");
}



function setup() {
    canvas = createCanvas(730, 540);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);
        console.log("scoreLeftWrist = " + scoreLeftWrist);
        console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +"leftWristY = "+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +"rightWristY = "+ rightWristY);
    }

}


function modelLoaded() {
    console.log('PoseNet Is Initialized! YEY!')
}



function draw() {
    image(video, 0, 0, 730, 540);
    
    fill("#FF0000");
    stroke("#FF0000");

    
    if(scoreRightWrist > 0.2)
    {
    circle(rightWristX,rightWristY,20);
     if(rightWristY >0 && rightWristY <= 500)
    {
        song2.play();
    }
    }
   


    if(scoreLeftWrist > 0.2)
    {
    circle(leftWristX,leftWristY,20);
    song.play();
    } else if(scoreRightWrist > 0.2) {
        
    circle(rightWristX,rightWristY,20);
    song2.play();
    }
    
}