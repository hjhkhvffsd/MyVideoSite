function changeVideo(videoPath) {
  const videoPlayer = document.getElementById('main-video');
  videoPlayer.src = videoPath;
  videoPlayer.play();
}
