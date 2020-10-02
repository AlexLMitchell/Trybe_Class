import React from 'react';
import MyButton from './components/MyButton';
import MyLabel from './components/MyLabel';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      labelText: '',
    };
  }

  setLabelText = (labelText) => {
    this.setState({ labelText });
  };

  render() {
    return (
      <div className="App">
        <MyLabel text={this.state.labelText} />
        <MyButton handleClick={this.setLabelText} label="ZOOOBOOMAFU" />
        <MyButton handleClick={this.setLabelText} label="MEDABOTS" />
        <MyButton handleClick={this.setLabelText} label="Digimon > Pokemon" />
      </div>
    );
  }
}
export default App;
