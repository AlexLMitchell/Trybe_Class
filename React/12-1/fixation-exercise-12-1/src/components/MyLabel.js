import React from 'react';

class MyLabel extends React.Component {
  render() {
    console.log(this.props);
    return <p> Cliquei no:{this.props.text}</p>;
  }
}

export default MyLabel;
