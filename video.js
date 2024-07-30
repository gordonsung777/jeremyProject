const video = document.getElementById('videoPlayer');
function playPause(){
  if (video.paused){
    video.play();
  }else{
    video.pause();
  }
}
function speedUp(){
  video.playbackRate +=0.5; //increase playback rate by 0.5
}

function slowDown() {
  video.playbackRate -=0.5; //decrease playback rate by 0.5
}