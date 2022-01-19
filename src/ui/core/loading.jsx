import React, {Component} from 'react';
import styled from 'styled-components';

export const UILoading = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const LoadingBlock = styled.div`
    border: 4px solid #f3f3f3;
    border-top: 4px solid #ff006f;
    border-radius: 25%;
    width: 60px;
    height: 60px;
    animation: spin 2s linear infinite;
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
`;

export class LoadingPage extends Component {
    render() {
        return <UILoading {...this.props}><LoadingBlock/></UILoading>;
    }
}
