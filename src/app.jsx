import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import Routes from "./routes";
import {withRouter} from "react-router-dom";

import MainWrapper from "./pages";
import {LoadingPage} from "./ui/core";

const mapStateToProps = ({app}) => ({
  loading: app.loading
});

@connect(mapStateToProps, null)
class App extends Component {
  render() {
    const {history, loading} = this.props
    if (loading) {
      return <LoadingPage/>;
    }
    return (
        <Fragment>
          <MainWrapper>
            <Routes history={history}/>
          </MainWrapper>
        </Fragment>
    );
  }
}

export default withRouter(App);
