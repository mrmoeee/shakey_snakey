# SSSnake - Classic snake game with a twist
---
### Overview / Background
SSSnake is an Object Oriented Programming Javascript implementation of the classic snake game with canvas.

Canvas is a 2D drawing API that will allow for the drawing of board SSSnake will be playable on. As the game is being played on the canvas created,  collision with food will generate a sound, and visual event, whilst also having background music. Music will be mutable.

There will be different types of food on the canvas that will generate different types of events or challenges players will have to overcome.

The Snake will have a default starting speed that will change depending on the length of the snake, and events from collision with a food object.
### Functionality

Pre-gameplay:
- [ ] Start of with a modal for Play and About buttons before game starts
- [ ] Modal for about will be simple overview of game, and rules
Gameplay:
- [ ] Food objects randomly generated and deployed across specified canvas width and height
- [ ] Food collision generates sounds and events depending on what type of food was generated
- [ ] Lo-fi background music to help player focus and stay calm, and will be mutable
- [ ] After specific time played, will generate random asteroids that will move from top of screen to bottom of screen

### Wireframe
The game will only have a single screen with the canvas, controls, mute button, links to the GitHub, LinkedIn, helper rules, and the about modal.

The canvas will be where food objects will be randomly generated from a food generator that will randomly pull from a foods object.

Different color foods signify the kinds of events that will be generated / actions that will happen when the snake eats it.

After the snake reaches a certain length, or the gameplay time reaches a few minutes, random asteroids will start falling from the top of the screen down to the bottom.
The snake head will have to avoid, but the snake body doesn't.

![](images/wireframe.png)

### Technologies
SSSnake will be implemented using:
* JavaScript for implementing features, in-game events, and game logic
* HTML5 Canvas for rendering the game
* Webpack
* HTML5 Audio to insert background music, and include different sound tracks for the events, and food eating

`snakefood.js`: this file will handle food logic for triggering certain types of events and audio when a snake eats a certain type of food

`snake.js`: this file will contain snake logic for eating, moving, and growing

`board.js`: this file will contain canvas logic for drawing the snake after it is moving, and draw out specific events

### Implementation Timeline

4 Main food events:
* Points per food color => purple: 100pts, red: 40pts, green: 20pts -> will provide incentive to eat poisoned fruit
* Purple color food = Poison, cannot be eaten before red color food
* Red color food = Antidote, allows snake to eat purple color food (replenishes after purple is eaten, meaning need to eat another red before another purple)
* Green food = Normal food, helps snake calm down
* When eating purple food without antidote, will make controls go in reverse and snake move faster until antidote is eaten. Lost points/length each second antidote is not eaten
* All eaten foods will grow out the snake

Random environment events :
Asteroids falling from the sky, with particle effects, and collision detection, if it hits the head of the snake its instakill
Colors of food will be switched randomly(?)
##### Weekend:
- [ ] Render Simple snake on a canvas, and move it around
- [ ] Try adding an audio file, or read up on HTML5 web audio API
- [ ]
##### DAY 1:
- [ ] Make sure `webpack` works, and everything is running out of index.html
- [ ] Implement Collision detection to allow completion for snake game, and look into how to include particle effects
- [ ] Read up on HTML5 audio to create back ground music

##### DAY 2:
- [ ] Implement purple food, and red food, poison antidote interaction,  implementing reversed controls and changing them back to normal when red food is eaten
  - [ ] When red food is eaten before purple food all is good and provides bonus points
- [ ] Implement collision sound effects for collision with food
- [ ] Start drawing random asteroids from the top of the canvas and move them down
##### DAY 3:
- [ ] Implement Asteroid collision, when collide with snake head will end the game
- [ ] Implement screen flashing events upon eating green foods too much
- [ ] Implement points system, showing them on the html page
##### DAY 4:
- [ ] Create mute sound button, linkedIn, GitHub
- [ ] Create About modal
- [ ] Create pre-gameplay screen, with a modal including the About button, and Play button
- [ ] Implement Restart button after game is completed
