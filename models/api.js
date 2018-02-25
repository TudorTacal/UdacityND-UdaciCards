import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';
const NOTIFICATION_KEY = 'NOTIFICATIONS';

// getDecks: return all of the decks along with their titles, questions, and answers. 
export const getDecks = () => {
  return AsyncStorage.getItem("decks")
    .then(JSON.parse)
      .then((decks) => {return decks});
}

// getDeck: take in a single id argument and return the deck associated with that id. 
export const getDeck = async (id) => {
  getDecks().then(data => {
    deck = data.filter(deck => Object.keys(deck)[0] == id)[0];
    return deck;
  })
}

// saveDeckTitle: take in a single title argument and add it to the decks. 
export const saveDeckTitle =  (title) => {
  getDecks().then((decks) => {
    decks.push({[title]: {title, questions: []}})
    AsyncStorage.setItem("decks", JSON.stringify(decks));
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

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync());
}

function createNotification () {
  return {
    title: 'Practice a quiz!',
    body: "don't forget to practice a quiz today!",
    ios: {
      sound: true,
    },
  }
}

export function setLocalNotification () {
  console.log('in setLocalNotification');
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        console.log(data);
         Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            console.log('status', status);
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()
              console.log('status', status);
              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(20);
              tomorrow.setMinutes(0);

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day'
                }
              )

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
            }
            else {
              alert("Don't forget to pass a quiz today!")
            }
          })
      }
    })
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