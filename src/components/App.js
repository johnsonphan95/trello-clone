import React, {Component} from 'react';
import TrelloList from "./TrelloList";
import TrelloActionButton from './TrelloActionButton';
import { connect } from 'react-redux';

class App extends Component {
  render (){
    console.log(this.props)
    const {lists} = this.props;
    return (
      <div className="App">
        <h2>Hello</h2>
        <div style={styles.listsContainer}>
          {lists.map(list => <TrelloList title={list.title} cards={list.cards} key={list.id}/>)}
          <TrelloActionButton list />
        </div>
      </div>
    );
  }
}

const styles = {
  listsContainer: {
    display: 'flex', 
    flexDirection: 'row'
  }
}

const mSTP = state => ({
  lists: state.lists
})

export default connect(mSTP)(App);
