var slideNumber;
var slideElements;

function slide(event) {
    // 左カーソルキー
    if (event.keyCode === 37) {
        if (1 > slideNumber) {
            return;
        }
        
        slideElements[slideNumber].classList.add("nonActive");
        slideNumber--;
        slideElements[slideNumber].classList.remove("nonActive");
        alert(slideNumber);
    }
    
    // 右カーソルキー
    if (event.keyCode === 39) {
        if (slideElements.length - 1 <= slideNumber) {
            return;
        }
        
        slideElements[slideNumber].classList.add("nonActive");
        slideNumber++;
        slideElements[slideNumber].classList.remove("nonActive");
        alert(slideNumber);
    }
}

function createPaperView() {
    slideNumber = 0;
    document.onkeyup = slide;
    slideElements = document.getElementsByClassName("slide");
    slideElements[slideNumber].classList.remove("nonActive");
}

