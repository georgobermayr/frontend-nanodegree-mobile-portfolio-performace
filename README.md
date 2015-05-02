## Website Performance Optimization portfolio project

# Optimizations in index.html:
- Mimification & inlining of CSS
- Mimification of JS
- Async loading of analytics JS
- Media query based loading for print CSS
- Fetch fonts from local server not from Google
- Mimification of final HTML file
- Optimization of images, espacially the pizza image

# Integration of Grunt to automate mimification & optimization prozesses

# Optimizations in pizza.html & main.js
- Image downsampling + optimization
- Mimification of JS
- Resize time of pizzas improved by fetching the offsetWidth of the pizza contianer only once instead doing so for every needed instance
- Framerate improved by fetching teh scrollTop position once instaed of doint it in every iteration
