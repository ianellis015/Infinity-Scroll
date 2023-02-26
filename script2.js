const backToTop = document.getElementById("topBtn");

function scrollToTop() {
    const scrollStep = -window.scrollY / 30;
    const scrollInterval = setInterval(() => {
        if (window.scrollY <= 0) {
            clearInterval(scrollInterval);
        }
        window.scrollBy(0, scrollStep);
    }, 15);
}

backToTop.addEventListener("click", scrollToTop);
