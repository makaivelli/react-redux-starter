import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }

    render() {
        return (
            <p>
                Counter: {this.props.value}
            </p>
        );
    }
}

export default Counter