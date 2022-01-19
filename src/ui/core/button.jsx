import React, {Component} from 'react';
import styled from 'styled-components';

export const UIButton = styled.button`
    display: flex;
    cursor: pointer;
    text-align: center;
    font-size: 14px ;
    font-family: 'fn2', sans-serif;
    height: 30px;
    border-radius: 0;
    background: black;
    border: none;
    color: white;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 0 20px;
    cursor: pointer;
    &:hover {
        opacity: 0.8
    }
    &:active, &:focus {
        opacity: 0.8
    }
`;

export class Button extends Component {
    render() {
        return <UIButton {...this.props} >
            {this.props.children}
        </UIButton>;
    }
}