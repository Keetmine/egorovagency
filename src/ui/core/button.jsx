import React, {Component} from 'react';
import styled from 'styled-components';

export const UIButton = styled.button`
    display: flex;
    cursor: pointer;
    text-align: center;
    font-size: ${props => (props.large ? '16px' : '14px')}; ;
    font-family: Roboto, sans-serif;
    height: ${props => (props.large ? '40px' : '30px')};
    border-radius: ${props => (props.rounded ? '500px' : 0)};
    background:${props => (props.border ? 'transparent' : 'black')};
    border: ${props => (props.border ? '2px solid' : 'none')};
    border-color: ${props => (props.color ? props.color : 'black')};
    color: ${props => (props.color ? props.color : props.border ? 'black' : 'white')};
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 0 20px;
    cursor: pointer;
    transition: all .3s ease-out;
    &:hover, &:active, &:focus {
        transition: all .3s easy-in;
        opacity: 0.7;
    }
`;

export class Button extends Component {
    render() {
        return <UIButton {...this.props} >
            {this.props.children}
        </UIButton>;
    }
}