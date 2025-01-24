const video = document.getElementById('myVideo');
    const playPauseBtn = document.getElementById('playPauseBtn');
console.log(video ,  playPauseBtn , video.currentTime);

    // Toggle play/pause on button click
    playPauseBtn.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        console.log("start");
        
        playPauseBtn.textContent = '⏸'; 
        // Change to pause icon
        playPauseBtn.style.position = 'absolute';
        playPauseBtn.style.bottom = '50%';
      } else {
        video.pause();
        video.load();
        console.log(video.currentTime);
        
        console.log("stop");

        playPauseBtn.textContent = '▶'; // Change to play icon
      }
    });

    // Hide the button when the video is playing
    video.addEventListener('play', () => {
      // playPauseBtn.style.opacity = '0';
    });

    // Show the button when the video is paused
    video.addEventListener('pause', () => {
      playPauseBtn.style.opacity = '1';
    });

    video.addEventListener('ended', () => {
      video.load(); // Reset video to the start
      playPauseBtn.textContent = '▶';
      playPauseBtn.style.opacity = '1' // Update to play icon
    });