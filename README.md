# Cranky Bird 

The live website can be found [here]

## Purpose

This Website was created for the sole purpose of completing the second Milestone Project for the Code Institute's Full Stack Developer course. It was built using the knowledge gained from the HTML, CSS, User Centric Design, JavaScript Fundamentals and Interactive Frontend Development modules. A full list of technologies used can be found in the [technologies](#Technologies-Used) section of this document.

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
- [Features](#Features)
    * [Existing Features](#Existing-Features)
    * [Future Features](#Features-Left-to-Implement)
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
Features planned:
* Page Heading - A page heading that has a clear caption what the page is about.
* An interactive Cranky Bird game.
* Game Instructions - Clear instructions on how to play the game before starting the game.
* Start Button.
* Score Count.
* Score displayed.
* Restart Game button.
* Game over message supplied.
* Footer Items - Contact Information and link GitHub Profile / Repository.

**Feature Importance/Effort** <br>
![Features](assets/images/scope.jpg)

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
Desktop aim
![Wireframes](assets/wireframe.jpg)

