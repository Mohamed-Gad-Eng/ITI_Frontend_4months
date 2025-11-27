window.onload = function() {
    document.querySelectorAll('.header a').forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
};
