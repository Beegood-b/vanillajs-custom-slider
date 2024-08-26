// get elements
var prevSlideBtn = document.getElementById("prevSlideBtn");
var nextSlideBtn = document.getElementById("nextSlideBtn");
var imgSlide = document.getElementById("imgSlide");

//create an array
var imgUrls = [];

// push imgs
imgUrls.push(
  "https://car-images.bauersecure.com/wp-images/3550/best_sportscar_514.jpg"
);
imgUrls.push(
  "https://www.usnews.com/object/image/0000018b-fa28-dc80-a9ef-ffe9f8290001/01-2024-chevrolet-corvette-angular-front-jmv.JPG?update-time=1700709318771&size=listiclePhoto"
);
imgUrls.push(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/McLaren_P1.jpg/338px-McLaren_P1.jpg"
);
imgUrls.push(
  "https://di-uploads-pod12.dealerinspire.com/universitydodgeram/uploads/2018/07/2018-Dodge-Challenger-SRT-Demon-University-Dodge.jpg"
);

// add event listeners to btns
prevSlideBtn.addEventListener("click", onPrevBtnClick);
nextSlideBtn.addEventListener("click", onNextBtnClick);

var currentIndex = 0;

imgSlide.src = imgUrls[currentIndex];
prevSlideBtn.disabled = true;

function onPrevBtnClick() {
  currentIndex--;
  imgSlide.src = imgUrls[currentIndex];
  nextSlideBtn.disabled = false;

  //disable button when needed
  if (currentIndex === 0) {
    prevSlideBtn.disabled = true;
  }
}

function onNextBtnClick() {
  currentIndex++;
  imgSlide.src = imgUrls[currentIndex];
  prevSlideBtn.disabled = false;

  //disable button when needed
  if (currentIndex === imgUrls.length - 1) {
    nextSlideBtn.disabled = true;
  }
}
