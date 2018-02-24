import { AsyncStorage } from 'react-native';

// getDecks: return all of the decks along with their titles, questions, and answers. 
export const getDecks = () => {
  return AsyncStorage.getItem("decks")
    .then(JSON.parse)
      .then((decks) => {return decks});
}

// getDeck: take in a single id argument and return the deck associated with that id. 
export const getDeck = async (id) => {
  getDecks().then(data => {
    deck = decks.filter(deck => Object.keys(deck)[0] == id)[0];
    return deck;
  })
}

// saveDeckTitle: take in a single title argument and add it to the decks. 
export const saveDeckTitle = (title) => {
  getDecks().then(decks => {
    decks.push({[title]: {title, questions: []}})
    return AsyncStorage.setItem("decks", JSON.stringify(decks));
  })
}

// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title. 
export const addCardToDeck = (title, card) => {
    getDecks().then((decks) => {
      let deckObject = decks.filter(deck => Object.keys(deck)[0] == title)[0];
      deckObject[title].questions.push(card);
      return AsyncStorage.setItem("decks", JSON.stringify(decks));
  });
}

export const decks = [
    {
        React: {
          title: 'React',
          questions: [
            {
              question: 'What is React?',
              answer: 'A library for managing user interfaces'
            },
            {
              question: 'Where do you make Ajax requests in React?',
              answer: 'The componentDidMount lifecycle event'
            }
          ]
        },
    },
    {
        JavaScript: {
          title: 'JavaScript',
          questions: [
            {
              question: 'What is a closure?',
              answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
          ]
        }
      },
      
]