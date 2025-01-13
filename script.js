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

    document.addEventListener('DOMContentLoaded', () => {
        // Get references to the elements
        const pageContainer = document.querySelector('#before-after-page');
        const photoPile = document.querySelector('.photo-pile');
        const resetButton = document.querySelector('#reset-button');
        const handIcon = document.querySelector('#clickable-icon');
    
        // Ensure the reset button is hidden on page load
        resetButton.style.display = 'none';
    
        // Event listener for clicking the photo pile
        photoPile.addEventListener('click', () => {
            // Expand the page height and fan out the images immediately
            pageContainer.classList.add('expand');
            photoPile.classList.add('spanned');
            
            // Show the reset button after the images fan out
            resetButton.style.display = 'block';
             // Hide the clickable hand icon when the pile is clicked
            handIcon.style.display = 'none';
        });
    
        // Event listener for clicking the reset button
        resetButton.addEventListener('click', () => {
            // Reset the page height back to its original size
            pageContainer.classList.remove('expand');
            
            // Reset the images to their original positions
            photoPile.classList.remove('spanned');
            
            // Hide the reset button when the photos are back in the original position
            resetButton.style.display = 'none';
        });
    });
