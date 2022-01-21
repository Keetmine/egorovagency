import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {Button, Container, Row, UIButton} from "../../ui/core";
import {getAllCurrencies} from "../../actions";
import {bindActionCreators} from "redux";
import DataTable from 'react-data-table-component';
import moment from 'moment'

import copySvg from '../../public/images/copy.svg';
import reloadSvg from '../../public/images/reload.svg';
import {CopyLabel} from "../../ui/core/copy";

export class CopyBtn extends Component {
    state = {
        show: false
    }
    copy = async (value) => {
        await navigator.clipboard.writeText(value);
        this.setState({show: true})
        setTimeout(() => this.setState({show: false}), 500)
    }
    render() {
        return (
            <Fragment>
                   <span onClick={() => this.copy(this.props.item)} title={'COPY'} className={'copy'}>
                       <img src={copySvg} alt='Copy' />
                    </span>
                <CopyLabel show={this.state.show}/>
            </Fragment>

        )
    }
}

const mapStateToProps = ({list}) => ({
    list: list.data
});

const mapDispatchToProps = dispatch => bindActionCreators ({
    getCurrencies: getAllCurrencies
}, dispatch);


@connect(mapStateToProps, mapDispatchToProps)
class Home extends Component {

    state = {
        columns: [
            {
                name: 'Дата',
                sortable: true,
                selector: row => moment(row.Date).format('DD.MM.YYYY, h:mm'),
            },
            {
                name: 'Код валюты',
                sortable: true,
                selector: row => row.Cur_Abbreviation,
            },
            {
                name: 'Текущий курс',
                sortable: true,
                selector: row => row.Cur_OfficialRate,
            },
            {
                name: '',
                cell: row => <CopyBtn item={String(moment(row.Date).format('DD.MM.YYYY, h:mm') + ' ' + row.Cur_Abbreviation + ' ' + row.Cur_OfficialRate)} />,
            },
        ]
    };

    copy = async (value) => {
        await navigator.clipboard.writeText(value);
    }

    render() {
        const {list, error} = this.props
        const {columns, data} = this.state
        return (
            <Container>
                <Row justify={'space-between'} className={'m-t-10 m-b-30px'}>
                    <h1>Курсы валют и цены</h1>
                    <Row>
                        <Button onClick={() => this.updateList()} className={'m-r-10px'} title='Reload' rounded border large>
                            <img src={reloadSvg} alt='Reload' />
                        </Button>
                        <Button onClick={() => this.props.history.push('/settings')} rounded large>Настройки</Button>
                    </Row>
                </Row>
                <h2>{error}</h2>

                <DataTable
                    columns={columns}
                    data={list}
                    pagination
                />
            </Container>
        );
    }
}

export default Home;