function slide(event) {
    // 左カーソルキー
    if (event.keyCode === 37) {
        if (1 > slideDocument.currentPage - 1) {
            return;
        }
        slideDocument.disActivate();
        slideDocument.currentPage--;
        slideDocument.activate();
    }

    // 右カーソルキー
    if (event.keyCode === 39) {
        if (slideDocument.length <= slideDocument.currentPage) {
            return;
        }
        slideDocument.disActivate();
        slideDocument.currentPage++;
        slideDocument.activate();
    }
}

function createPaperView() {
    var slideElements = document.getElementsByClassName("slide");
    slideDocument = [];
    slideDocument.currentPage = 1;
    slideDocument.nothingSentence; // undefined
    document.onkeyup = slide;

    var documentCount = 0;
    for (var i = 0; i < slideElements.length; i++) {
        slideDocument[documentCount] = {
            "slide": slideElements[i],
            "sentence": slideDocument.nothingSentence
        };

        documentCount++;
        var sentencesElements = slideElements[i].getElementsByClassName("sentence")
        if (sentencesElements !== 0) {
            for (var j = 0; j < sentencesElements.length; j++) {
                slideDocument[documentCount] = {
                    "slide": slideElements[i],
                    "sentence": sentencesElements[j]
                };

                documentCount++;
            }
        }
    }

    slideDocument.activate = function() {
        this[this.currentPage - 1]["slide"].classList.remove("passive");
        if (this[this.currentPage - 1]["sentence"] !== this.nothingSentence) {
            this[this.currentPage - 1]["sentence"].classList.remove("passive");
        }
    };

    slideDocument.disActivate = function() {
        this[this.currentPage - 1]["slide"].classList.add("passive");
        if (this[this.currentPage - 1]["sentence"] !== this.nothingSentence) {
            this[this.currentPage - 1]["sentence"].classList.add("passive");
        }
    };

    slideDocument.activate();
}
