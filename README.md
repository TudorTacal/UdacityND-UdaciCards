# Udaci Cards

The final project during the Udacity React Nanodegree course. Happy days!

The UdaciCards project is a mobile application, designed for iOS, that allows users to study collections of flashcards. The app allows users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

This project encompasses the fundamental aspects of building a native application including handling infinite lists, routing, and user input.

The project was created from scratch using `create-react-native-app`. 

## To start the project

* Install and start the API server
    - `clone the repo`
    - `cd into the project`
    - `install xCode`
    - `install Expo`
    - `yarn install`
    - `yarn start`
    - `press i to open the iOs simulator`

## Components

*  `<App/>`
    * handles routing
    * renders children components
*  `<DeckList/>`
    * displays the title of each Deck
    * displays the number of cards in each deck
*  `<DeckView>`
    * displays the title of the Deck
    * displays the number of cards in the deck
    * displays an option to start a quiz on this specific deck
    * An option to add a new question to the deck
*  `<NewDeckView/>`
    * An option to enter in the title for the new deck
    * An option to submit the new deck title
*  `<NewQuestionView/>`
    * An option to enter in the question
    * An option to enter in the answer
    * An option to submit the new question
*  `<QuizView/>`
    * displays a card question
    * an option to view the answer (flips the card)
    * a "Correct" button
    * an "Incorrect" button
    * the number of cards left in the quiz
    * Displays the percentage correct once the quiz is complete

## Extra info

The routing is handled by `stack navigator`. All the screens are created at the top level component `<App/>`.

The styling was done at the component level leveraging React Native's `Stylesheet` api. This is a new paradigm of styling React components and a lot of the community is using this approach even in web projects. 



### To do's

* add information about the notifications
* add Screenshots to Readme
* Deploy to AppStore
* Test the app


