# Frontend Mentor - Space Tourism Multi-page Website

This is a solution to the [Multi-step form](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ).



### Screenshots
<div style="text-align: center;">
    <div style="margin-bottom: 10px;">
        <strong>Mobile Screenshot</strong>
    </div>
    <img src="./screenshots/screenshotMobile.jpg" alt="Mobile Screenshot" style="max-height: 300px;">
</div>

<div style="text-align: center;">
    <div style="margin-bottom: 10px;">
        <strong>Tablet Screenshot</strong>
    </div>
    <img src="./screenshots/screenshotTablet.jpg" alt="Tablet Screenshot" style="max-height: 400px;">
</div>

<div style="text-align: center;">
    <div style="margin-bottom: 10px;">
        <strong>Desktop Screenshot</strong>
    </div>
    <img src="./screenshots/screenshotDesktop.jpg" alt="Desktop Screenshot" style="max-height: 500px;">
</div>


### Solution Requirements

- [ ] Complete each step of the sequence
- [ ] Go back to a previous step to update their selections
- [ ] See a summary of their selections on the final step and confirm their order
- [ ] View the optimal layout for the interface depending on their device's screen size
- [ ] See hover and focus states for all interactive elements on the page
- [ ] Receive form validation messages if:
  - [ ] A field has been missed
  - [ ] The email address is not formatted correctly
  - [ ] A step is submitted, but no selection has been made


### Modifications
- [ ] Small Animations
- [ ] Added link to next section in the selection section

### Tasks
- [ ] Navbar for all layout
- [ ] Mobile menu 

### Styling
- [ ] Background on all layouts and all pages
- [ ] Navbar on all layouts

### Optimizations


### Notes
- Background image handling 
  - It's really tricky to use bg-[] for background image with tailwind, there are total 12 of images across all different layouts, the complete string of the classname must be appear somewhere in the code in order for tailwind to parse and added to the stylesheet, this defeats goal of dynamically generating different background depending on page and size in the first place, so opt to using Imaging instead.

- Pesky cursor-pointer and touch screen tap highlighting
  - When a cursor-pointer applied, on touch devices, will have a short flash when tap, looks very cheap, and disiabling it using media query is just asking for trouble and still will not solve if on mobile device with a mouse. so I found these property that will help with do the trick:
  - ```
    -webkit-tap-highlight-color: transparent; /* For Safari, iOS */
    tap-highlight-color: transparent; /* For some Android browsers */
    ```

### Links

- [Github repo]()
- [Deployed on Vercel]()

### Built with

- [Create T3 App](https://create.t3.gg/)
  - [Nextjs](https://nextjs.org/)
  - [React](https://react.dev/)
  - [TailwindCSS](https://tailwindcss.com/)

