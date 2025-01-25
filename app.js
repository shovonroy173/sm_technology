document.querySelectorAll('.video-container').forEach((container) => {
  const video = container.querySelector('video');
  const playPauseBtn = container.querySelector('.play-pause-button');

  // Toggle play/pause on button click
  playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playPauseBtn.textContent = '❚❚'; // Change to pause icon
      playPauseBtn.style.position = 'absolute';
      playPauseBtn.style.bottom = '50%';
    } else {
      video.pause();
      video.load(); 
      playPauseBtn.textContent = '▶'; // Change to play icon
    }
  });

  // Reset the button when the video ends
  video.addEventListener('ended', () => {
    video.load(); // Reset to the start
    playPauseBtn.textContent = '▶';
    playPauseBtn.style.opacity = '1';
  });
});


const slides = document.querySelectorAll('.slide');
// const next = document.querySelector('.next-btn');
const prev = document.querySelector('.prev-btn');
var counter = 0;

const goPrev = () => {
  counter--;
  if(counter <= 0 ){
    counter = 0;
  }
  slideImage(); 
  toggleButtons();
}

const goNext = () => {
  counter++;
  if(counter > slides.length - 1){
    counter = 0;
  }
  slideImage();
  toggleButtons();

}

const slideImage = () => {
  slides.forEach((slide)=>{
    slide.style.transform = `translateX(-${counter * 100}px)`;
  })
}

  const toggleButtons = () => {
    if (counter === 0) {
      prev.style.display = 'none';
    } else {
      prev.style.display = 'block'; 
    }
  };

  toggleButtons();