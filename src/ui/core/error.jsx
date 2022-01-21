import React, {Component} from 'react';
import styled from 'styled-components';

export const UIError = styled.p`
    display: flex;
    font-family: Roboto, sans-serif;
    font-size: 14px ;
    color: red;
    padding: 0 20px;
    transition: all .3s ease-out;
`;

export class Error extends Component {
    render() {
        return <UIError {...this.props} >
            {this.props.children}
        </UIError>;
    }
}