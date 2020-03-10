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
    default:
      return state;
  }
}

export default listsReducer;