import React from 'react';

class TrelloActionButton extends React.Component {

  renderAddButton = () => {
    const { list } = this.props;

    const buttonText = list ? "Add another list" : "Add another card"
    return (
      <div>
        <p>{buttonText}</p>
      </div>
    )
  }
  render() {
    return this.renderAddButton();
  }
}

export default TrelloActionButton;