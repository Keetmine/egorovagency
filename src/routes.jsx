import {PureComponent} from "react";
import {Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/not-found";

class Routes extends PureComponent {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/404" component={NotFound} />
                <Route component={NotFound} />
            </Switch>
        );
    }
}

export default Routes;
