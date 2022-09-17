const mainScroll = document.querySelector('.scroll-imgs');


function startScrolling() {
    let moveu = 0;
    setInterval(() => {
        if (moveu <= mainScroll.children.length - 2) {
            mainScroll.scrollBy(300, 0);
            moveu++;
        } else {
            mainScroll.scroll(0, 0);
            moveu = 0;
        }
    }, 5000);
}

startScrolling();