import React, {PureComponent} from 'react';
import {Button} from "../../ui/core";
import styled from "styled-components";

class NotFound extends PureComponent {
    render() {
        return (
            <NotFoundPage>
                <h2>Ошибка 404</h2>
                <p>Такой страницы не существует</p>
                <Button onClick={() => this.props.history.push('/')} rounded large>На главную</Button>
            </NotFoundPage>
        );
    }
}

export default NotFound;

export const NotFoundPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 40vh;
    justify-content: center;
    margin-bottom: 20px;
    & > h2 {
        margin: 0;
        font-size: 40px;
    }
`;