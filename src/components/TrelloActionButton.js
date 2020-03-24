import React from 'react';
import Textarea from 'react-textarea-autosize';

class TrelloActionButton extends React.Component {

  state = {
    formOpen: false, 
    text: ""
  }

  openForm = () => {
    this.setState({
      formOpen: true
    })
  }

  closeForm = (e) => {
    this.setState({
      formOpen: false
    })
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  renderAddButton = () => {
    const { list } = this.props;

    const buttonText = list ? "Add another list" : "Add another card"
    return (
      <div 
        style={styles.button}
        onClick={this.openForm}
      >
        <p>{buttonText}</p>
      </div>
    )
  }

  renderForm = () => {
    const { list } = this.props; 

    const placeholder = list ? "Enter list title..." : "Enter a title for this card...";
    const buttonTitle = list ? "Add List" : "Add Card";

    return (
    <div 
      // style={{
      //   minHeight: 85, 
      //   minWidth: 272, 
      // }}
    >
      <Textarea 
        placeholder={placeholder} 
        autoFocus 
        // onBlur={this.closeForm}
        value={this.state.value}
        onChange={this.handleChange}
        style={{
          resize: 'none', 
          width: 296,
          overflow: 'hidden',
          outline: 'none',
          border: 'none', 
          minHeight: 85
        }}
      />
    </div>)
  }

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

const styles = {
  button: {
    display: 'flex', 
    alignItems: 'center', 
    cursor: 'pointer',
    borderRadius: 3,
    height: 36, 
    width: 272,
    paddingLeft: 10
  }
}

export default TrelloActionButton;