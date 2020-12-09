function scrollToAccept() {
    const terms = document.querySelector('.terms-and-conditions');
    const watch = document.querySelector('.watch');
    const button = document.querySelector('.accept');
    

    function obCallback(payload) {
        if (payload[0].intersectionRatio === 1) {
            button.disabled = false;
            console.log('REMOVING DISABLED');
        } else {
            button.disabled = true;
            // stop ovbserving the button
            ob.unobserve(terms.lastElementChild);
        }
    }
    const ob = new IntersectionObserver(obCallback, {
        root: terms,
        threshold: 1,
    });

    ob.observe(terms.lastElementChild)


    if (!terms) {
        return; // quit this, there isn't that item on the page
    }
}

scrollToAccept();