# Irie Vibes Retreat

This project is a dynamic webpage that incorporates two main features:

Sticky Horizontal Timeline Animation: A scroll-based animation that moves a timeline horizontally as the user scrolls down the page.
Before/After Photo Animation: A photo pile that expands and fans out on click, with the option to reset the view.

# Features
- Sticky Horizontal Timeline
As the user scrolls, a horizontal timeline (.timeline) moves along the X-axis, creating a smooth scrolling animation.
The timeline is confined to the height of the viewport and will only translate horizontally within the limits of the container.
The timeline's scroll movement is determined by the user's scroll progress.
- Before/After Photo Animation
The photo pile (.photo-pile) starts in a compact state.
Upon clicking the pile, the page expands vertically and the images fan out to reveal the before and after transformation.
A reset button allows the user to revert to the original photo pile view.
A clickable hand icon (#clickable-icon) is displayed until the photo pile is clicked.

# Installation
Clone this repository to your local machine:

git clone https://github.com/yourusername/project-name.git
Navigate into the project directory:

cd project-name
Open the project in your preferred code editor.

# Usage
Sticky Horizontal Timeline:
Ensure the timeline section is wrapped in a container with the class .timeline-container.
The scroll animation will work as the user scrolls past the container’s bounds.
Before/After Photo Animation:
Click the .photo-pile to trigger the animation that expands the page and fans out the images.
Use the reset button (#reset-button) to return the photo pile to its original position.

# File Structure

/irie vibes retreat
├── index.html
├── styles.css
├── script.js
└── assets/
    └── images/
index.html: The main HTML file containing the structure of the page.
styles.css: The CSS file for styling the page and animations.
script.js: The JavaScript file that handles the timeline and photo pile animations.
assets/: Folder containing image assets.

# deployment
GitHub Pages (For Static Websites)
Push your project to a GitHub repository.
Navigate to your GitHub repository and click on the Settings tab.
In the Pages section (located under the Code and automation section), select the source as main branch and /root directory.
GitHub will automatically deploy your site. After a few minutes, you can access it using the provided URL, usually in the format https://yourusername.github.io/irie vibes retreat.