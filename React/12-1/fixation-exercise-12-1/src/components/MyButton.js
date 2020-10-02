import React from 'react';

class MyButton extends React.Component {
  render() {
    return (
      <button
        onClick={() => {
          this.props.handleClick(this.props.label);
        }}
      >
        {this.props.label}
      </button>
    );
  }
}

export default MyButton;
