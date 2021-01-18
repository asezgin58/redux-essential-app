import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {Home, Author, User, SagaExample} from "./pages";
import Route from './_route';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/author" component={Author}/>
                <Route path="/user" component={User}/>
                <Route path="/saga-example" component={SagaExample}/>
            </Switch>
        </Router>
    );
};

export default App;