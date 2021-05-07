# Cranky Bird 

The live website can be found [here]()

## Purpose

This Website was created for the sole purpose of completing the second Milestone Project for the Code Institute's Full Stack Developer course. It was built using the knowledge gained from the HTML, CSS, User Centric Design, JavaScript Fundamentals and Interactive Frontend Development modules. A full list of technologies used can be found in the [technologies](#Technologies) section of this document.

## Table of Contents
* [User Experience Design (UX)](#User-Experience-Design)
    * [The Strategy Plane](#The-Strategy-Plane)
        * [User stories](#User-Stories)
    * [The Scope Plane](#The-Scope-Plane)
    * [The Structure Plane](#The-Structure-Plane)
    * [The Skeleton Plane](#The-Skeleton-Plane)
        * [Wireframes](#Wireframes)
    * [The Surface Plane](#The-Surface-Plane)
        * [Design](#Design)
            * [Colour Scheme](#Colour-Scheme)
            * [Typography](#Typography)
            * [Imagery](#Imagery)
    * [Differences to Design](#Differences-to-Design)
- [Actions](#Actions)
    * [Existing Actions](#Existing-Actions)
    * [Future Actions](#Actions-Left-to-Implement)
* [Technologies](#Technologies)
* [Testing](#Testing)
    * [Test Strategy](#Test-Strategy)
    * [Test Results](#Test-Results)
    * [Isses and Resolutions](#Issues-and-Resolutions-to-issues-found-during-testing)
* [Deployment](#Deployment)
    * [Project Creation](#Project-Creation)
    * [GitHub Pages](#Using-Github-Pages)
    * [Locally](Run-Locally)
* [Credits](#Credits)
  * [Content](#Content)
  * [Acknowledgements](#Acknowledgements)

****

## User Experience Design
### **The Strategy Plane**
This website was created to showcase my knowledge of HTML, CSS & JavaScript and to provide users with some entertainment in the form of an online "Cranky Bird" game created with JavaScript. The game should be easy to understand, simple to interactive with and give feedback to the user on a desktop. This game was not created for mobile devices because you must use the space bar to fly up and down.

Site Goals:
* To showcase the skills I have learnt in HTML, CSS, JavaScript.
* To provide users with an interactive game to play that has clear Win / Lose Scenarios.
* To create an enjoyable, interactive game that makes the user want to stay and play again.
* To create a game that makes the user want to return to the website.

#### User stories
* As a user, I want to easily understand the main purpose of the site.
* As a user, I want to view the website and content clearly on my computer.
* As a user, I want to have instructions on how to play the game so that I can easily understand the rules.
* As a user, I want to be able to start a game when I am ready.
* As a user, I want to see a bird fly up and down.
* As a user, I want to know whether my bird hits a barrier correctly.
* As a user, I want a way to start a new game when the current game has ended.
* As a user, I want to see my score so that I know how many obstacles I have evaded.
* As a user, I want to see contact information for the site owner incase I want to reach out with any queries I have about the site.
* As a user, I want to see other work the site owner has created useing their GitHub profile / repositories.

### **The Scope Plane**
Actions planned:
* Page Heading - A page heading that has a clear caption what the page is about.
* An interactive Cranky Bird game.
* Game Instructions - Clear instructions on how to play the game before starting the game.
* Start Button.
* Score Count.
* Score displayed at end game.
* Restart Game button.
* Game over message supplied.
* Footer Items - Contact Information and link GitHub Profile / Repository.

**Action Importance/Effort** <br>
![Actions](assets/actions.png)

### **The Structure Plane**

User Story:
> As a user, I want to easily understand the main purpose of the site.
 
 Acceptance Criteria:
* Header displayed with text 'Cranky Bird'
* Sub heading displayed with text 'Try to survive!'

Description:<br>
There will be a page heading added that reads 'Cranky Bird' with a tag line below it reading 'Try to survive!'. This will enable the users to immediately see what the site is about as soon as they enter.

User Story:
> As a user, I want to view the website and content clearly on my computer.
 
 Acceptance Criteria:
 * Website layout is well displayed and readable on a desktop device.

Description:<br>
Bootstrap will be used to lay the content of the Website out in containers, rows and columns. No elements should overlap their containers and all items should be responsive so that no elements are too large to display properly.

User Story:
> As a user, I want to have instructions on how to play the game so that I can easily understand the rules.
 
 Acceptance Criteria:
 * Game Instructions are provided that contain the following information:
    * How to interact with the game.
    * How to win the game.
    * How to lose the game.

Description:<br>
Information to be included:
A full set of game instructions will be added as a modal to make sure its read before the game begins. This will display to the user, information on how to control the bird, how the spped of the game increases and how to lose the game.<br>
If the bird is to touch an obstacle the bird will explode.<br>
If you lose the game, the score will be revealed to ensure the user is able to see what theer end score was.<br>
Only a space bar input will be accepted to maneuver the character up and down.<br>

User Story:
> As a user, I want to be able to start a game when I am ready.
 
 Acceptance Criteria:
 * User can initiate start game

Description:<br>
A button will be added to the "How to play" modal to allow the user to start a game.

User Story:
> As a user, I want to see a bird fly up and down.
 
 Acceptance Criteria:
 * When the space bar is pressed the character will go upwards and it will have a natural velocity downwards.

Description:<br>
The bird will fall downwards on the screen unless spacebar is pressed in which case it will go upwards.

User Story:
> As a user, I want to know whether my bird hits a barrier correctly.
 
 Acceptance Criteria:
 * A death modal will apear if the characters hitbox enters an obstacles area.

Description:<br>
If the successful in avoiding an obstacle, the score will increase and the game will continue.<br>
If the successful in avoiding an obstacle, the game will end and a modal will appear with the users score and a play again button.

User Story:
> As a user, I want a way to start a new game when the current game has ended.
 
 Acceptance Criteria:
 * User has a way to restart the game by the end game modal that will reset the whole game.

Description:<br>
A button will be added to the end game modal that will refresh the game and create new game with new obstacles and the orginal gamespeed.

User Story:
> As a user, I want to see my score so that I know how many obstacles I have evaded.
 
 Acceptance Criteria:
 * User score displayed on screen upon game over

Description:<br>
A score will be added to the page to show the user how many obstacles they have avoided during their session. This score will only be displayed for the current session. Once the game is reset, the score will reset for a new game.

User Story:
> As a user, I want to see contact information for the site owner incase I want to reach out with any queries I have about the site.
 
 Acceptance Criteria:
 * Contact Information displayed in footer.

Description:<br>
Contact information will be added to the footer. This will contain a name and email for the site owner.

User Story:
> As a user, I want to see other work the site owner has created useing their GitHub profile / repositories.
 
 Acceptance Criteria:
 * GitHub Repositry information is displayed
 * GitHub Icon displayed that directs to GitHub Profile

Description:<br>
GitHub Repositpry information will be displayed in the footer. This should contain the site owners GitHub user name and an icon that when clicked will direct to the owners GitHub page.


### **The Skeleton Plane**
#### Wireframes
Desktop view
![Wireframes](assets/wireframe.jpg)

### **The Surface Plane**
### Design

#### Colour Scheme
Body colour: White<br>
Text colour: Blue<br> 
Game Board background colour: Multicoloured <br>
Header and Footer background: A light greeen #98FB98<br>

#### Typography
All the text within the body is in the font [Times] including all modals and buttons.

#### Imagery
The image of the bird was take from OpenGameArt.org and was used by making the images into a sprite with codeandweb.com.

#### Differences to Design

All actions listed in The Scope Plane were implemented as per design.

****
## Actions

### Existing Actions

* Heading and Sub-heading.
* Game Instructions.
* Scorecount.
* Spacebar input.
* Buttons to start and re-start game.
* Footer - Contact Information and GitHub Repo Information

### Actions Left to Implement

* Levels: 'Easy' and 'Hard' mode will be added in a future release. The easy level will be at a slow speed with the obstaclefurther apart to give the user an easier chance to make it past obstacles. Hard mode will start with the speed faster, also the obstacles will be closer together to give a more challenging expierence for the user.

****
## Technologies
* [HTML](https://en.wikipedia.org/wiki/HTML)
	* This project uses HTML as the main language used to complete the structure of the Website.
* [CSS](https://en.wikipedia.org/wiki/CSS)
	* This project uses custom written CSS to style the Website.
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
	* This project uses JavaScript for functionality through the Website, this includes the Cranky Bird game, onclick button functions.
* [Bootstrap](https://getbootstrap.com/)
	* The Bootstrap framework is used throughout this website for layouts and styling. 
* [Gitpod](https://gitpod.io/workspaces)
	* Gitpod is used to develop the Website.
* [GitHub](https://github.com/)
	* GithHub is the hosting site used to store the source code for the Website and [Git Pages](https://pages.github.com/) is used for the deployment of the live site.
* [Git](https://git-scm.com/)
	* Git is used as version control software to commit and push code to the GitHub repository where the source code is stored.
* [Figma](https://www.figma.com/file/7ic47sIHwTefP0dWBJdFzB/Untitled?node-id=0%3A1)
	* This was used to create wireframes for 'The Skeleton Plane' stage of UX design.
* [Favicon](https://favicon.io/)
    * Favicon.io was used to make the site favicon 
* [Techsini](http://techsini.com/multi-mockup/index.php)
    * tecnisih.com Multi Device Website Mockup Generator was used to create the Mock up image in this README.
* [Excel](https://www.microsoft.com/en-ie/microsoft-365/excel)
    * Excel was used to create the bar chart diplaying difficulty / importance information.

****
## Testing

### Test Strategy
#### **Summary**

Testing is required on The Cranky Bird game created for Milestone Project 2. All actions and user stories documented in the README are to be tested. 

HTML code must pass through the [W3C HTML Validator](https://validator.w3.org/).

CSS code must pass through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).

JavaScript code must pass through the [JSHint Validator](https://jshint.com/).

#### **High Level Test Cases**
![Test Cases](assets/test-cases.png)

User Stories covered:
* As a user, I want to view the website and content clearly on my computer. - TC001, TC002, TC003
* As a user, I want to easily understand the main purpose of the site. - TC004
* As a user, I want to have instructions on how to play the game so that I can easily understand the rules. - TC005
* As a user, I want to be able to start a game when I am ready. - TC008
* As a user, I want a way to start a new game when the current game has ended. - TC008
* As a user, I want to know whether my bird hits a barrier correctly. - TC007
* As a user, I want to see my score so that I know how many obstacles I have evaded. - TC010
* As a user, I want to see contact information for the site owner incase I want to reach out with any queries I have about the site. - TC013
* As a user, I want to see other work the site owner has created useing their GitHub profile / repositories. - TC014

#### **Access Requirements**

GitHub Respoitory must be set to public for the live website to be displayed.

#### **Regression Testing**

All actions previously tested while in development should be retested on the live Website.

#### **Assumptions and Dependencies**

Testing is dependent on website being live on GitHub pages.

#### **Out of Scope**

Only testing listed under High Level Test Cases will be performed as part of this test effort.

### Test Results

![Results](assets/test-results.png)<br>
Full test results can be found [here](assets/MS2-test-results.xlsx)<br>
Please note these results are a .xlsx file and will require excel, google docs or compatiable program to open the file.<br>
All tests passed.

### Issues and Resolutions to issues found during testing
* I was going to create a game similar to "Breakout" but i discovered when you changed the desktop size it would change the coordinate system. which then made it so you couldn't fire the pellet in some directions. I couldnt find a resoulution to this so I decided I would change the game type I was going to create.
* Email mailto link was broken due to a space between the mailto and email. This was found when running code through jshint.com and was fixed by removing the space.
* Clicking on the screen would multiply the game speed because it was constantly running the animatie() function. It was found using jshift, fixed by making it so when you click on the start button it runs the animate() function.
* Restart button wasnt working properly, when you pressed it the speed was not reset it would keep the previous games speed if the user made it to 20 plus score in the previous score. It was fixed by created a second button that refreshes the page to reset the game.
* Game speed wasnt increasing when the user hit 20 points. It was fixed by using "if ((score%20) === 0)" to devide by 20 to recognise the marker to increase the speed of the game.
****
## Deployment

### Using Github Pages
1. Navigate to the GitHub [Repository](https://github.com/dylanocallaghan/Milestone2)
1. Click the 'Settings' Tab.
1. Scroll Down to the Git Hub Pages Heading.
1. Select 'Master Branch' as the source.
1. Click the Save button.
1. Click on the link to go to the live deployed page.

### Run Locally
1. Navigate to the GitHub [Repository](https://github.com/dylanocallaghan/Milestone2)
1. Click the Code drop down menu.
1. Either Download the ZIP file, unpackage locally and open with IDE (This route ends here) OR Copy Git URL from the HTTPS dialogue box.
1. Open your developement editor of choice and open a terminal window in a directory of your choice.
1. Use the 'git clone' command in terminal followed by the copied git URL.
1. A clone of the project will be created locally on your machine.

****
## Credits

### Code
The JavaScript used to create this HTML canvas game was inspired by different out put such as [youtube link](https://www.youtube.com/watch?v=eI9idPTT0c4) to help with the start and restart button and [phaser](http://phaser.io/) to help me with different aspects and game ideas.

### Acknowledgements
I would like to thank slack user Spence_mentor for his help and pointers throughout this project. He also helped me with different problems like the restart button not working correctly. Gave me ideas to help the game run better.
****