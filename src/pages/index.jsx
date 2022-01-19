import React, { Component } from 'react';

export class MainWrapper extends Component {
    render() {
        const { children } = this.props;
        return children;
    }
}

export default MainWrapper;