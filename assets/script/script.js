var bookMark = document.querySelectorAll(".upper");

for (let i = 0; i < bookMark.length; i++) {
    bookMark[i].addEventListener("click", function() {
        if (!bookMark[i].classList.contains('marked')) {
            bookMark[i].classList.add("marked");
            bookMark[i].src = "assets/images/marked_img.png";
        } else {
            bookMark[i].classList.remove('marked');
            bookMark[i].src = "assets/images/image4.png";
        }
    });

}