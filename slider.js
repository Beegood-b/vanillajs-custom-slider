var slider1 = {
  imgUrls: [],
  currentIndex: 0,
  prevSlideBtn: document.getElementById("prevSlideBtn"),
  nextSlideBtn: document.getElementById("nextSlideBtn"),
  imgSlide: document.getElementById("imgSlide"),

  start: function () {
    // add event listeners
    this.prevSlideBtn.addEventListener("click", this.onPrevBtnClick);
    this.nextSlideBtn.addEventListener("click", this.onNextBtnClick);

    // create img array
    this.imgUrls.push(
      "https://car-images.bauersecure.com/wp-images/3550/best_sportscar_514.jpg"
    );
    this.imgUrls.push(
      "https://www.usnews.com/object/image/0000018b-fa28-dc80-a9ef-ffe9f8290001/01-2024-chevrolet-corvette-angular-front-jmv.JPG?update-time=1700709318771&size=listiclePhoto"
    );
    this.imgUrls.push(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/McLaren_P1.jpg/338px-McLaren_P1.jpg"
    );
    this.imgUrls.push(
      "https://di-uploads-pod12.dealerinspire.com/universitydodgeram/uploads/2018/07/2018-Dodge-Challenger-SRT-Demon-University-Dodge.jpg"
    );

    this.imgSlide.src = this.imgUrls[this.currentIndex];
    this.prevSlideBtn.disabled = true;
  },
  onPrevBtnClick: function () {
    this.currentIndex--;
    this.imgSlide.src = this.imgUrls[this.currentIndex];
    this.nextSlideBtn.disabled = false;

    // disable prev button when needed
    if (this.currentIndex === 0) {
      prevSlideBtn.disabled = true;
    }
  },

  onNextBtnClick: function () {
    this.currentIndex++;
    this.imgSlide.src = this.imgUrls[this.currentIndex];
    this.prevSlideBtn.disabled = false;

    // disable next button when needed
    if (this.currentIndex === this.imgUrls.length - 1) {
      nextSlideBtn.disabled = true;
    }
  },
};
