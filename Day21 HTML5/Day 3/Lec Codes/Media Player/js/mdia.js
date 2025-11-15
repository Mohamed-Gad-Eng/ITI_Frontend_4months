var audioTag = document.getElementById("audio");
var timeRange = document.getElementById("timeRange");
var volumeRange = document.getElementById("volumeRange");
var currentTrackImage = document.getElementById("currentTrackImage");

audioTag.addEventListener("timeupdate", function() {
    timeRange.value = audioTag.currentTime;
});

audioTag.addEventListener("loadedmetadata", function() {
    timeRange.max = audioTag.duration;
});

function changeAudioTime() {
    audioTag.currentTime = timeRange.value;
}



function changeAudioVolume() {
    audioTag.volume = volumeRange.value;
}

function audioPlay() {
    audioTag.play();
}

function audioPause() {
    audioTag.pause();
}

function audioStop() {
    audioTag.pause();
    audioTag.currentTime = 0;
    timeRange.value = 0;
}

function selectTrack(trackSrc, trackImage) {
    audioTag.src = trackSrc;
    currentTrackImage.src = trackImage;
    audioTag.play();
}
