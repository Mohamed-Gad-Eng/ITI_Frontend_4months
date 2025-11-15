var audioTag = document.getElementsByTagName("audio")[0];
var timeRange = document.getElementsByTagName("input")[0];

// console.log(audioTag, timeRange)


//timeupdate fires every time audio changes --> slider follows audio
//update slider position as audio plays
audioTag.addEventListener("timeupdate", function () {
    timeRange.value = audioTag.currentTime;
})


// when page loaded , set slider max value == audio duration
// set max value when audio plays
window.addEventListener("load" , function(){
    timeRange.setAttribute("max" , audioTag.duration)
})

// drag  slider --> change audio current time
// change audio time when slider moves
function changeAudioTime(){
    audioTag.currentTime = timeRange.value
}


function playAudio(){
    audioTag.play()
}

function stopAudio(){
    audioTag.pause();
    audioTag.currentTime = 0;
    timeRange.value = 0;
}