import React, {Component, Fragment} from "react";
import Routes from "./routes";
import {withRouter} from "react-router-dom";

import MainWrapper from "./pages";

class App extends Component {
  render() {
    const {history} = this.props
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
