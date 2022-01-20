import React, {Component} from 'react';
import {Button, Container, Row} from "../../ui/core";
import {CurrenciesTable} from "../../ui/components";
import Select from 'react-select'

class Settings extends Component {

    state = {
        currencies: [
            {
                date: '11.12.2021',
                code: 'USD',
                value: '2.314'
            }
        ]
    };

    componentDidMount() {

    }

    updateList = () => {

    }

    render() {
        const {currencies} = this.state
        const options = [
            { value: 'chocolate', label: 'Chocolate', isDisabled: true },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ]
        return (
            <Container>
                <Row justify={'space-between'} className={'m-t-10 m-b-30px'}>
                    <h1>Настройки</h1>
                    <Button onClick={() => this.props.history.push('/')} rounded large>Назад</Button>
                </Row>
                <Row className={'m-b-30px'}>
                    <Select options={options} className="curSelect" />
                    <Button border large>Добавить</Button>
                </Row>
                <CurrenciesTable headColumn={['Дата', 'Код валюты', 'Текущий курс']}
                                 bodyColumn={currencies} action={'delete'}>
                </CurrenciesTable>
            </Container>
        );
    }
}

export default Settings;