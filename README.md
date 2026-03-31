# job-tracker
JOB APPLICATION TRACKER PIPELINE
Using only HTML, CSS, and Vanilla JavaScript
Goal: Learn fundamentals (no major dependencies)
Done:
1. Create Project Folder
   - Create a new folder named: job-tracker
   - Inside it, create two subfolders:
     → css
     → js

2. Create the Main Files
   - In the root folder (job-tracker), create: index.html
   - In the css folder, create: style.css
   - In the js folder, create: app.js
3. Build the HTML Structure (index.html)
   - Add basic HTML5 skeleton (<html>, <head>, <body>)
   - Create header with title and "+ New Application" button
   - Add statistics section (5 cards: Total, Applied, Interview, Offer, Rejected)
   - Add filters section (search input + status dropdown)
   - Add empty container for application cards
   - Create modal popup for the add/edit form
   - Link CSS file in <head>
   - Link JS file before </body>

4. Style the App with CSS (style.css)
   - Reset default styles (* selector)
   - Style body, container, and header
   - Design statistic cards with different colors
   - Style filters (search bar and dropdown)
   - Create nice application cards with status badges
   - Style the modal and form elements
   - Add hover effects and basic responsiveness

5. Add JavaScript Logic (app.js)
   - Create array to hold applications
   - Use localStorage to save and load data
   - Write function to render all application cards
   - Write function to update statistics
   - Handle adding new application
   - Handle editing existing application
   - Handle deleting application
   - Implement search functionality
   - Implement status filter
   - Control modal open/close
   - Save data automatically after changes

6. Connect and Test
   - Open index.html in browser
   - Test adding a new application
   - Test editing and deleting
   - Test search and filter
   - Check if data persists after refresh (localStorage)
   - Fix any bugs

7. Optional Improvements (for learning)
   - Add sorting options (by date, company)
   - Improve date display format
   - Add confirmation before delete
   - Add dark mode toggle
   - Make it mobile-friendly
   - Add export to CSV feature

Recommended Order:
Step 1 → Step 2 → Step 3 (HTML first) → Step 4 (CSS) → Step 5 (JS) → Step 6 (Test)

Tips:
- Work on one step at a time
- Save files and refresh browser after every change
- Use console.log() to debug
- Start simple: get add + display working first
- Then add edit, delete, search, and filter
