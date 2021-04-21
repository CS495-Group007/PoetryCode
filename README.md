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
Box.js
BoxItem.js
Boxable.js
GameBoard.js
Legend.js
SimplyScansion.js
history.js
BoxItem.css
GameBoard.css
SimplyScansion.css
</br>  
#### Related Libraries / Packages / Tools  
DragDropContainer for the draggable blocks and DropTarget for the locations that the blocks can be placed.
</br>  
#### What has been done  
Functionality to drag blocks into the gameboard, check if the answer is correct, and save the game board state.
</br>  
#### What needs to be done  
Add styling to support different block capacities for each line (right now the styling just supports 5 blocks per line). <br/>
Add in backend functionality <br/>
-> Pull in the current poem information on page load. <br/>
-> Write the current answer to the database when the student clicks the save button. <br/>
-> Update the poem's state in the database when the user submits a correct answer.
</br>  
### Adding a Poem    
*Primary Code contained in the AddPoemInterface.js component file.*  
#### Related Components / Styling Files  
AddPoemInterface.js
BlockNumberDropdown.js
DynamicDropDown.js
GameBoard.js
GamePage.css
</br>
#### Related Libraries / Packages / Tools  
Container, Row, Col, and Button from react bootstrap
Multiselect
</br>  
Added in functionality to capture necessary data for the poem.
</br>  
Make it so that when the user clicks the submit button, the data is written to the database.
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
1 Add new link to the first group of Nav.Link with the href set to what you want it to be and the display name of the link </br>
2 Set up the Route Path with the correct href and component to render
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
*Backend code is all contained in the "poetry-api" folder of the repository.*  
### Tools and Technologies  
Languages: PHP, SQL
</br>
Tools: MySQL, MySQL Workbench, VSCode Remote SSH Extension, Apache/Nginx, Postman
### Helpful Links  
- Building the API: https://codeofaninja.com/2018/09/rest-api-authentication-example-php-jwt-tutorial.html
- Modifying the .htaccess file: https://gist.github.com/alexsasharegan/173878f9d67055bfef63449fa7136042
</br>
### Contacts  
John Hawkins: john.hawkins@ua.edu, Web Director with eTech
</br>
### What has been done  
- eTech has been chosen as the hosting solution for the site
- We made sure that the server could serve the React application. This required modifying the .htaccess file to enable React routing.
- The MySQL database and tables for the application have been built out.
- OOP PHP has been chosen to build out the API
- The registration URI has been built and tested with Postman
</br>
### What to avoid  
*Some mistakes we made / problem areas we encountered along the way.*  
- Node likely will not work with the eTech server due to the way it serves requests with Nginx.
- We first attempted to host the React app and an Express backend on Google Cloud Platform. The school currently offers no cloud-hosting solutions for these colleges, but may in Fall 2021. We contacted OIT, the College of Engineering, and the Alabama Digital Humanities Center, but none of them offered solutions that would fit the project's needs.
- We attempted developing the PHP code locally, but the eTech server would not let us connect to and query its MySQL server instance. The simplest solution was to develop on the server using the remote SSH extension. This also prevented the other developers from having to host the PHP code and database on their local machine for testing.
</br>
### What needs to be done  
- The first thing to do is figure out why the React developers are unable to perform requests to the registration URI through their code, even though they can do it with Postman.
- The other API endpoints need to built out.
- Security measures (likely JWT) need to be integrated into the API.
- Once the code is complete and functioning, a long-term hosting solution will need to be determined with Dr. Tavares and potentially John as well.
- Add password back to poetry-api/config/database.php
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

6. Blocks can be dragged between lines

7. Blocks can be reordered within lines

8. A line of blocks can be cleared by clicking the trash icon.

9. When a correct answer is entered the user is taken back to the dashboard

10. Can register a new user by calling the register.php URI via postman.

11. The navbar should change appearances to accomodate various screen sizes.
