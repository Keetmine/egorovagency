import React, {Component} from 'react';
import {Button, Container, Row} from "../../ui/core";
import Select from 'react-select'
import {bindActionCreators} from "redux";
import {getCurrency, getAllCurrencies, removeFromList} from "../../actions";
import {connect} from "react-redux";
import DataTable from "react-data-table-component";

import deleteSvg from '../../public/images/delete.svg';
import {Error} from "../../ui/core/error";


export class DeleteBtn extends Component {
    render() {
        return (
            <span onClick={() => this.props.remove()} title={'Delete'} className={'copy'}>
                <img src={deleteSvg} alt='Delete' />
            </span>
        )
    }
}

const mapStateToProps = ({currencies, list}) => ({
    currencies: currencies.data,
    error: list.error,
    list: list.data
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getCurrencies: getAllCurrencies,
    getCurrency,
    removeFromList
}, dispatch);

@connect(mapStateToProps, mapDispatchToProps)
class Settings extends Component {
    state = {
        listIsLoad: false,
        sessionList: [],
        currenciesList: [],
        selectedItem: [],
        columns: [
            {
                name: 'Код валюты',
                sortable: true,
                selector: row => row.Cur_Abbreviation,
            },
            {
                name: '',
                cell: row => <DeleteBtn item={row} remove={() => this.props.removeFromList(row.Cur_ID)}/>,
            },
        ]
    };

    componentDidMount() {
        this.props.getCurrencies()
    }

    componentDidUpdate(prevProps) {
        if (this.props.currencies !== prevProps.currencies && !this.state.listIsLoad) {
            this.props.currencies.map(item => (
                this.setState(prevState => ({
                    currenciesList: [...prevState.currenciesList, {
                        value: item.Cur_ID,
                        label: item.Cur_Abbreviation
                    }]
                }))
            ))
            this.setState({listIsLoad: true})
        }
    }

    handleChange = (selectedItem) => {
        this.setState({selectedItem});
    }

    updateList = () => {
        this.props.getCurrency(this.state.selectedItem)
    }

    render() {
        const {list, error} = this.props
        return (
            <Container>
                <Row justify={'space-between'} className={'m-t-10 m-b-30px'}>
                    <h1>Настройки</h1>
                    <Button onClick={() => this.props.history.push('/')} rounded large>Назад</Button>
                </Row>
                <Row className={'m-b-30px'}>
                    <Select options={this.state.currenciesList}
                            onChange={this.handleChange}
                            className="curSelect" />
                    <Button onClick={this.updateList} border large>Добавить</Button>
                    {error ? <Error>{error}</Error> : '' }
                </Row>

                <DataTable
                    columns={this.state.columns}
                    data={list}
                    pagination
                />
            </Container>
        );
    }
}

export default Settings;