import React from 'react';

export default class MyButton extends React.Component {
    render() {
        return(
            <button onClick={()=>this.props.onClick()}>{this.props.label}</button>
        )
    }
}
