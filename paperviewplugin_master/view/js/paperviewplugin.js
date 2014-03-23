function slide(event) {
    // 左カーソルキー
    if (event.keyCode === 37) {
        if (1 > countOfSlide) {
            return;
        }
        movePreviousDocument();
    }

    // 右カーソルキー
    if (event.keyCode === 39) {
        if (slideDocument.length <= countOfSlide &&
                slideDocument[countOfSlide]["sentences"].length <= countOfSentence) {
            return;
        }
        moveNextDocument();
    }
}

function moveNextDocument() {
    if (slideDocument[countOfSlide]["sentences"].length !== 0 &&
            countOfSentence === 0) {
        slideDocument[countOfSlide]["sentences"][countOfSentence].classList.remove("nonActive");
    } else if (slideDocument[countOfSlide]["sentences"].length > countOfSentence) {
        countOfSentence++;
        slideDocument[countOfSlide]["sentences"][countOfSentence].classList.remove("nonActive");

    } else {
        slideDocument[countOfSlide]["slide"].classList.add("nonActive");
        countOfSlide++;
        countOfSentence = 0;
        slideDocument[countOfSlide]["slide"].classList.remove("nonActive");
    }

}

function movePreviousDocument() {
    if (slideDocument[countOfSlide]["sentences"].length !== 0 &&
            slideDocument[countOfSlide]["sentences"].length - 1 === countOfSentence) {
        slideDocument[countOfSlide]["sentences"][countOfSentence].classList.add("nonActive");
    } else if (countOfSentence !== 0) {
        countOfSentence--;
        slideDocument[countOfSlide]["sentences"][countOfSentence].classList.add("nonActive");
    } else {
        slideDocument[countOfSlide]["slide"].classList.add("nonActive");
        countOfSlide--;
        countOfSentence = 0;
        slideDocument[countOfSlide]["slide"].classList.remove("nonActive");
    }
}

function createPaperView() {
    countOfSlide = 0;
    countOfSentence = 0;

    var slideElements = document.getElementsByClassName("slide");
    slideDocument = [];
    document.onkeyup = slide;
    for (var i = 0; i < slideElements.length; i++) {
        slideDocument[i] = {
            "slide": slideElements[i],
            "sentences": slideElements[i].getElementsByClassName("sentence")
        };
    }

    slideDocument[countOfSlide]["slide"].classList.remove("nonActive");
}
