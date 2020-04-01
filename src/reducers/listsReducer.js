import { CONSTANTS } from '../actions'

let listId = 2; 

const initialState = [
  {
  title: "First Thing", 
  id: 0, 
  cards: [
      {
        id: 0, 
        text: "XD"
      },
      {
        id: 1, 
        text: "LUL"
      }
    ]
  }, 
{
  title: "Second Thing", 
  id: 1, 
  cards: [
      {
        id: 0, 
        text: "KEKW"
      },
      {
        id: 1, 
        text: "monkaW"
      }
    ]
  }
]

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload, 
        cards: [], 
        id: listId
      };
      listId += 1; 
      return [...state, newList];
    default:
      return state;
  }
}

export default listsReducer;