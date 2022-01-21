import React, {Component} from 'react';
import styled from 'styled-components';

export const UICopyLabel = styled.span`
    display: ${props => (props.show ? 'flex' : 'none')};
    font-family: Roboto, sans-serif;
    font-size: 12px ;
    color: rgb(126, 126, 126);
    background: rgb(233, 233, 233);
    border-radius: 20px;
    padding: 6px 12px;
    transition: all .3s ease-out;
    margin-left: 15px;
`;

export class CopyLabel extends Component {
    render() {
        return (
             <UICopyLabel {...this.props} show={this.props.show}>Copy</UICopyLabel>
        )
    }
}