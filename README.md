# Thought Diary

A simple CBT thought diary app.

View the demo [here](https://thought-diary.netlify.app/) - please be aware that it can take up to 30 seconds for the backend server to initially spin-up.

## Plan

The MVP will be that people can log their thoughts as a series of responses to questions and then access these from a dashboard, with the option to update or delete each individual thought. The design will be clean and clear.

I plan to use the Mern stack for this project. I have not used MongoDB before so this is a good chance to learn something new. I am excited to practise my backend skills and implement custom authentication. I also plan to use Boostrap for styling which I have not used previously.

## Reflection

I really enjoyed this project and it's given me a good grounding in both Bootstrap and MongoDB. It was fun to explore new technology and work within a subject matter that I am passionate about - mental health.

### Challenges

- Connecting to the database from my deployed backend (hosted in Render) was initially tricky, as MongoDB requires IP addresses to be added to a list of approved addresses to connect from. After much googling and researching, I found that Render actually provides these addresses once you have deployed the app, but it was just a little hidden.

- Creating a multi-step form that allowed me to save the data inbetween each step. This seemed quite dauntiny when I was thinking about the app, but actually once I designed my component tree, including the state and functions of each component, it became quite simple. I used the useState() hook to store data as an object in the parent component, and then passed down the setState function to each child as a prop. Each time the 'next' or 'previous' buttons on each step of the form were clicked, it set the new state to the previous state spread using the spread operator and the additional data e.g.
  `setFormData({...formData, newProperty: "value"})`

- Customising Bootstrap so that I could use different theme colours and overwrite some styles - e.g. the colour of a button's background when the user hovers over it, or it is in an active or focused state - took up a fair amount of time in this project. I think this was because a) I had never used Bootstrap before, so there was a learning curve to actaully get used to using components and utility classes before I even thought about customising them b) Bootstrap appears to be a little bit fickle with how and when you can override certain styles e.g. sometimes I could override using CSS classes, sometimes I needed to use IDs. I assume this is due to the CSS cascade and how bootstrap classes have been created, but as a user it was quite difficult to figure it out without trial and error. Thankfully I found some great tutorials online on how to customise Bootstrap themes and global variables using a custom SASS file which I gleefully used!

### What I'd do differently

I think if I was to create this app from scratch using technology for reasons other than 'wanting to learn something new', I would have used Next.js, as this would have allowed me to use dynamic pages for each thought - instead I used a modal for each one - and allowed to pre-fetch data server side, reducing the load on the client side. I would also have deployed the backend to a different provider, or at least a paid tier, as the initial load of the data can take up to 30 seconds as it relies on the server spinning up after each period of inactivity, and this is obviously not ideal. I think I would also have considered a different CSS library/framework, as although I appreciate how easy it is to make responsive apps with Bootstrap I found the customisation of it a bit fiddly and, at least upon first glance, quite restricted.

### Next steps

If I were to continue this project, my initial next steps would be to:

- Implement user authentication - logging in and out
- Create functionality for the user to pick the date and time of the thought
- Create a search/filter function to enable the user to select which thoughts to view.

Strech goals would be to:

- Create tags/labels for each emotion, thinking style, etc that could then be used to categorise each thought and filter from
- Add a hints and tips section on each step of the form e.g. how to answer the question, links to further resources, etc
- An about page where the user could learn about what a thought diary is and how to use the app
- Someway to automatically analyse the data and present this to the user e.g. a pie chart of which emotions are most common.

## Progress Journal

### 06/09/22

- Initialised github repo
- Created Express App
- Set up routes and middleware
- Created DB on mongoDB
- Used mongoose to create schema and model
- Added logic to POST request and tested using Postman

### 07/09/22

- Added logic for all CRUD routes, tested using Postman
- Created frontend react app
- Installed Bootstrap and SASS
- Created pages and routes
- Created Navbar component
- Implemented test fetching of data and rendering on screen

### 13/09/22

- Created multi-step form components
- Created state and functions for form behaviours
- Created next and previous buttons for form. Ensured that these appear conditionally, and that form data is stored and prepopulated if moving from current step
- Added post request and submit button so that form data can be posted to database
- Added delete request and button so that thought can be deleted from db, change is reflected on page
- Manually tested functionality using app and Postman

### 14/09/22

- Created frontend pages and components
- Styled using bootstrap

### 15/09/22

- Continued styling and creation of components and pages

### 16/09/22

- Deployed frontend to Netlify
- Deployed backend to Render

### 19/09/22

- final MVP finishing touches added

<hr />

## Updates:

### 11/10/22

- Added date and time picker, removed console errors regarding form input control (reference [here](https://bobbyhadz.com/blog/react-component-changing-uncontrolled-input)) 
