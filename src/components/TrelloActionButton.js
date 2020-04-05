import React from 'react';
import Textarea from 'react-textarea-autosize';
import { connect } from 'react-redux';
import { addList, addCard } from '../actions';

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

  handleAddList = () => {
    const { dispatch } = this.props; 
    const { text } = this.state;
  
    if (text) {
      dispatch(addList(text))
    }
    
    return;
  }

  renderAddButton = () => {
    const { list } = this.props;

    const buttonText = list ? "Add another list" : "Add another card"
    const buttonTextBackground = list ? 'rgba(0, 0, 0, .15)' : 'inherit';

    return (
      <div 
        style={{
          ...styles.button, 
          backgroundColor: buttonTextBackground
        }}
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
    // const buttonTextBackground = list ? 'rgba(0, 0, 0, .15)' : 'inherit';

    return (
      <div>
        <div>
          <Textarea 
            placeholder={placeholder} 
            autoFocus 
            onBlur={this.closeForm}
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
        </div>
        <div 
          style={{...styles.button2, backgroundColor: "#5aac44"}}
          onMouseDown={this.handleAddList}
        >
          {buttonTitle}
        </div>
      </div>
    )
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
  }, 
  button2: {
    marginTop: 8, 
    display: 'flex', 
    alignItems: 'center'
  }
}

export default connect()(TrelloActionButton);