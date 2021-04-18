# SyllaBits
*Poetry Scansion site for [Dr. Tavares](https://english.ua.edu/people/etavares/).*

##### During the Spring 2021 semester, we encountered various backend hosting delays and setbacks, which ultimately meant we couldn't complete the project. In this readme, we'll detail what has been done and what needs to be done for each part of the site.   
</br>  
</br>  

## Frontend  
*Frontend code is all contained in the "poetry-app" folder of the repository.*  
### Gameplay    
*Code contained in the "SimplyScansion" component file.*  
#### Related Components / Styling Files  
Replace this text with your content  
</br>  
#### Related Libraries / Packages / Tools  
*The gameboard is pretty wild. Probably a good idea to talk about that here.*  
Replace this text with your content  
</br>  
#### What has been done  
Replace this text with your content  
</br>  
#### What needs to be done  
Replace this text with your content  
</br>  
### Adding a Poem    
*Primary Code contained in the "FILENAME" component file.*  
#### Related Components / Styling Files  
Replace this text with your content  
</br>
#### Related Libraries / Packages / Tools  
*The gameboard is pretty wild. Probably a good idea to talk about that here.*  
Replace this text with your content  
</br>  
#### What has been done  
Replace this text with your content  
</br>  
#### What needs to be done  
Replace this text with your content  
</br>   
### Login  
*Primary Code contained in the "Login.js" component file.*  
#### Related Components / Styling Files  
Login.css
</br>
#### Related Libraries / Packages / Tools  
React-Bootstrap: Form, Button, and Col
</br>  
#### What has been done  
Form is complete with validation
</br>  
#### What needs to be done  
Set up for and connect to backend
</br>   
### Adding a Poem Page  
*Primary Code contained in the "FILENAME" component file.*  
#### Related Components / Styling Files  
Replace this text with your content  
</br>
#### Related Libraries / Packages / Tools  
*The gameboard is pretty wild. Probably a good idea to talk about that here.*  
Replace this text with your content  
</br>  
#### What has been done  
Replace this text with your content  
</br>  
#### What needs to be done  
Replace this text with your content  
</br>   
### Create Account  
*Primary Code contained in the "SignUp.js" component file.*  
#### Related Components / Styling Files  
Login.css
</br>
#### Related Libraries / Packages / Tools  
React-Bootstrap: Form, Button, Col
</br>  
#### What has been done  
Form is complete with validation
</br>  
#### What needs to be done  
Set up for and connect to backend
</br>  
### HowTo  
*Primary Code contained in the "HowTo.js" component file.*  
#### Related Components / Styling Files  
Login.css
</br>
DashboardStyling.css
</br>
#### Related Libraries / Packages / Tools  
React-Bootstrap: Container, Col, Row, Table
</br>  
#### What has been done  
Set up per Dr. Taveres' request
</br>  
#### What needs to be done  
Nothing more needs to be done 
</br>  
### About  
*Primary Code contained in the "Credits.js" component file.*  
#### Related Components / Styling Files  
Login.css
</br>
DashboardStyling.css 
</br>
#### Related Libraries / Packages / Tools  
React-Bootstrap: Container, Col, and Row
</br>  
#### What has been done  
Set up per Dr. Tavares' request
</br>  
#### What needs to be done  
Nothing more needs to be done
</br>  
### Navigation Bar  
*Primary Code contained in the "App.js" component file.*  
#### Related Components / Styling Files  
App.css
</br>
#### Related Libraries / Packages / Tools  
React-Bootstrap: Nav, Navbar
</br>
React-Router-Dom: Router, Switch, Route
</br>  
#### What has been done  
Collapsable navbar has been set up with links to all components (except the instructor dashboard) 
</br>  
#### What needs to be done  
Set up to change based on user type:
</br>
->Get rid of Login/SignUp pages if the user is logged in </br>
->Change student dashboard to instructor dashboard if an instructor is logged in </br>
To add a new link: </br>
1) Add new link to the first group of Nav.Link with the href set to what you want it to be and the display name of the link </br>
2) Set up the Route Path with the correct href and component to render
</br>  
### Student Dashboard  
*Primary Code contained in the "FILENAME" component file.*  
#### Related Components / Styling Files  
Replace this text with your content  
</br>
#### Related Libraries / Packages / Tools  
*The gameboard is pretty wild. Probably a good idea to talk about that here.*  
Replace this text with your content  
</br>  
#### What has been done  
Replace this text with your content  
</br>  
#### What needs to be done  
Replace this text with your content  
</br>  
### Instructor Dashboard  
*Primary Code contained in the "FILENAME" component file.*  
#### Related Components / Styling Files  
Replace this text with your content  
</br>
#### Related Libraries / Packages / Tools  
*The gameboard is pretty wild. Probably a good idea to talk about that here.*  
Replace this text with your content  
</br>  
#### What has been done  
Replace this text with your content  
</br>  
#### What needs to be done  
Replace this text with your content  
</br>  
</br>
## Backend  
*Backend code is all contained in the "poetry-backend" folder of the repository.*  
### Tools and Technologies  
Replace this text with your content  
</br>
### Contacts  
Replace this text with your content  
</br>
### What has been done  
Replace this text with your content  
</br>
### What to avoid  
*Some mistakes we made / problem areas we encountered along the way.*  
Replace this text with your content  
</br>
### What needs to be done  
Replace this text with your content  
</br>  
</br>

## Sprint 2 Test Cases
1. The user should be able to click the boxes on the instructor dashboard to view student statuses on each poem
    
 - Tested this feature by clicking on all of the dummy data students we have currently in our app and verifying that their progress matches up with the progress that we have in our dummy database.


2. The user should be able to click a poem on the poem dashboard to link to the corresponding gameboard page

  - First, we navigated to the student dashboard. Then we clicked on Sonnet 4. We verified that the poem name and text were correct. We then verified that the poem key was correct by playing the game.


3. The user should be able to navigate the site with the navbar
  
  - To test this, we clicked on each link in the nav bar and noted that it took us to the correct page.


4. The user should be able to check their work against the answer key.
  
  - To test this, we loaded up Sonnet 4. We input the correct answer on the gameboard (which is alternating red and blue) and noticed that we got a “Correct!” alert. Then, we deleted a row, and noted that we got the expected output, which was an “Incorrect” alert when we clicked the submit button


5. After a user logs in, they should be taken to their student dashboard

  - We tested this by logging in with a username and password, and noted that the login button did indeed take us to our student dashboard.


# Sprint 3 Test Cases
1. The interface should be easily navigable by a new user.

  - We clicked around the nav bar to make sure that it navigated to the correct pages.

2. Should be able to click the button at the top of the instructor dashboard to see an alternate view.

  - Verified this by clicking the button and making sure that the view was updated correctly.

3. A link on the student dashboard should take users to a poem to be scanned.

  - Verified this by clicking on a poem and verifying that the poem text and key were the ones in our dummy database.

4. The login form should take the user to their dashboard on submission.

  - Verified this by clicking the log in button and verifying that the page was changed to the correct dashboard.

5. The register form should require all fields except for the instructor email.

  - Verified this by leaving the fields empty and noting that the form would not submit.
