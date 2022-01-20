import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, Container, Row} from "../../ui/core";
import {CurrenciesTable} from "../../ui/components";
import {getAllCurrencies} from "../../actions";
import {bindActionCreators} from "redux";

const mapStateToProps = ({currencies}) => ({
    currencies: currencies.data,
    isLoading: currencies.isLoading,
    error: currencies.error
});

const mapDispatchToProps = dispatch => bindActionCreators ({
    getCurrencies: getAllCurrencies
}, dispatch);

@connect(mapStateToProps, mapDispatchToProps)
class Home extends Component {

    state = {
    };

    componentDidMount() {
        this.props.getCurrencies()
    }

    updateList = () => {

    }

    render() {
        const {currencies, error} = this.props
        return (
            <Container>
                <Row justify={'space-between'} className={'m-t-10 m-b-30px'}>
                    <h1>Курсы валют и цены</h1>
                    <Row>
                        <Button onClick={() => this.updateList()} className={'m-r-10px'} rounded border large>
                            <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.42702 5.01281L10.7071 6.29289C11.0976 6.68342 11.0976 7.31658 10.7071 7.70711C10.3166 8.09763 9.68342 8.09763 9.29289 7.70711L6.29289 4.70711C5.90237 4.31658 5.90237 3.68342 6.29289 3.29289L9.29289 0.292893C9.68342 -0.0976311 10.3166 -0.0976311 10.7071 0.292893C11.0976 0.683418 11.0976 1.31658 10.7071 1.70711L9.40525 3.00896C14.1877 3.22089 18 7.16525 18 12C18 14.3981 17.0565 16.6496 15.4053 18.3224C15.0173 18.7154 14.3841 18.7195 13.9911 18.3315C13.598 17.9436 13.5939 17.3104 13.9819 16.9174C15.2673 15.6152 16 13.8668 16 12C16 8.2774 13.0942 5.23349 9.42702 5.01281ZM8.59475 20.991C3.81226 20.7791 0 16.8348 0 12C0 9.59706 0.94734 7.34135 2.60451 5.66773C2.9931 5.27528 3.62625 5.27215 4.0187 5.66074C4.41115 6.04933 4.41428 6.68249 4.02569 7.07494C2.73567 8.37777 2 10.1295 2 12C2 15.7226 4.90584 18.7665 8.57298 18.9872L7.29289 17.7071C6.90237 17.3166 6.90237 16.6834 7.29289 16.2929C7.68342 15.9024 8.31658 15.9024 8.70711 16.2929L11.7071 19.2929C12.0976 19.6834 12.0976 20.3166 11.7071 20.7071L8.70711 23.7071C8.31658 24.0976 7.68342 24.0976 7.29289 23.7071C6.90237 23.3166 6.90237 22.6834 7.29289 22.2929L8.59475 20.991Z" fill="black"/>
                            </svg>
                        </Button>
                        <Button onClick={() => this.props.history.push('/settings')} rounded large>Настройки</Button>
                    </Row>
                </Row>
                <h2>{error}</h2>
                <CurrenciesTable headColumn={['Дата', 'Код валюты', 'Текущий курс']}
                                 bodyColumn={currencies} action={'copy'}>
                </CurrenciesTable>
            </Container>
        );
    }
}

export default Home;