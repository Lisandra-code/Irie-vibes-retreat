// Select timeline container
const stickySections = document.querySelectorAll('.timeline-container');

window.addEventListener('scroll', () => {
    stickySections.forEach((section) => transform(section));
});

function transform(section) {
    // Gets the offset of the parent section relative to the page
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector('.timeline');
    
    // Calculates the current scroll progress as a percentage
    const windowScroll = window.scrollY;
    const viewportHeight = window.innerHeight;
    const startScroll = offsetTop + 50 ; // Starts 200px after entering the viewport
    const endScroll = offsetTop + section.parentElement.offsetHeight - viewportHeight; // When it exits
    
    let percentage = ((windowScroll - startScroll) / (endScroll - startScroll)) * 100;
    percentage = Math.max(0, Math.min(percentage, 100)); // Clamp percentage to 0-100 range

    // Translates the timeline horizontally based on percentage
    const maxTranslate = section.scrollWidth - viewportHeight; // Max translate value
    const translateX = -(percentage / 100) * maxTranslate * 0.8; // Converts percentage to pixel value
    scrollSection.style.transform = `translate3d(${translateX}px, 0, 0)`;
}
