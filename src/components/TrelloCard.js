import React from 'react';

const TrelloCard = ({text}) => {
  return (
    <div style={styles.cardContainer}>
      <input style={styles.input} value={text}></input>
    </div>
  )
}

const styles = {
  cardContainer: {
    marginBottom: 8
  }, 
  input: {
    boxSizing: 'border-box', 
    width: '100%', 
    padding: 8
  }
}

export default TrelloCard;