song = "";

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function preload()
{
 song = loadSound("NaatuNaatu.mp3");
}

function setup()
{
  canvas = createCanvas(600,600);
  canvas.position(650, 250);
  
  video = createCapture(VIDEO);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
	console.log(results);
	
	rightWristX = results[0].pose.rightWrist.x;
	rightWristY = results[0].pose.rightWrist.y;
	console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

	leftWristX = results[0].pose.leftWrist.x;
	leftWristY = results[0].pose.leftWrist.y;
	console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
		
  }
}

function draw()
{
  image(video,0,0,600,600);

  stroke("red");
  fill("blue");
  circle(floor(leftWristX),floor(leftWristY),30);
}
function play()
{
  song.setVolume(0.5);
  song.play();
}
function stop()
{
  song.stop();
}