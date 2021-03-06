function slide(event) {
    // 右カーソルキー
    if (event.keyCode === 39) {
        if (slideElements.length - 1 <= slideElements.currentSlide
                && slideElements[slideElements.currentSlide].sentences.length - 1 <= slideElements.currentSentence) {
            return;
        }
        
        if (slideElements[slideElements.currentSlide].sentences.length <= slideElements.currentSentence) {
            slideElements.increaseSlide();
        } else {
            slideElements.increaseSentence();
        }
    }
    
    // 左カーソルキー
    if (event.keyCode === 37) {
        if (slideElements.currentSlide <= 0 && slideElements.currentSentence <= 0) {
            return;
        }
        
        if (slideElements.currentSentence <= 0) {
            slideElements.decreaseSlide();
        } else {
            slideElements.decreaseSentence();
        }
    }
}

function createPaperView() {
    slideElements = document.getElementsByClassName("slide");
    slideElements.currentSlide = 0;
    slideElements.currentSentence = 0;

    for (var i = 0; i < slideElements.length; i++) {
        slideElements[i].sentences = slideElements[i].getElementsByClassName = slideElements[i].sentences = slideElements[i].getElementsByClassName("sentence");
    }

    slideElements.increaseSlide = function() {
        this[this.currentSlide].className = this[this.currentSlide].className.replace("(.*)", "$& passive");
        this.currentSlide++;
        this[this.currentSlide].className = this[this.currentSlide].className.replace("passive", "");
        this.currentSentence = 0;
        if (this[this.currentSlide].sentences.length !== this.currentSentence) {
            this[this.currentSlide].sentences[this.currentSentence].className = this[this.currentSlide].sentences[this.currentSentence].className.replace("passive", "");
        }
    };

    slideElements.decreaseSlide = function() {
        this[this.currentSlide].className = this[this.currentSlide].className.replace("(.*)", "$& passive");
        this.currentSlide--;
        this[this.currentSlide].className = this[this.currentSlide].className.replace("passive", "");
        this.currentSentence = 0;
        if (this[this.currentSlide].sentences.length !== this.currentSentence) {
            this[this.currentSlide].sentences[this.currentSentence].className = this[this.currentSlide].sentences[this.currentSentence].className.replace("passive", "");
        }
    };

    slideElements.increaseSentence = function() {
        this.currentSentence++;
        this[this.currentSlide].sentences[this.currentSentence].className = this[this.currentSlide].sentences[this.currentSentence].className.replace("passive", "");
    };

    slideElements.decreaseSentence = function() {
        this[this.currentSlide].sentences[this.currentSentence].className = this[this.currentSlide].sentences[this.currentSentence].className.replace("(.*)", "$& passive");
        this.currentSentence--;
    };

    slideElements.init = function() {
        this[this.currentSlide].className = this[this.currentSlide].className.replace("\s", "");
    };
    
    document.onkeyup = slide;
    slideElements.init();
}
