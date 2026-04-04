document.addEventListener('DOMContentLoaded', () => {
    const anchors = document.querySelectorAll('a[href*="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const href = this.getAttribute("href");
            if (!href.includes("#")) return;
            const targetId = href.split("#")[1];
            if (!targetId) return; 
            const isSamePage = href.startsWith("#") || 
                               href.startsWith("./#") || 
                               (this.pathname === window.location.pathname);
            if (isSamePage) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
window.addEventListener("load", function() {
    if (window.location.hash) {
        setTimeout(() => {
            history.replaceState("", document.title, window.location.pathname + window.location.search);
        }, 10);
    }
});
