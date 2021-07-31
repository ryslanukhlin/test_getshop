import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Final from './pages/final';

import Home from './pages/index';
import Phone from './pages/phone';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/phone" component={Phone} />
                <Route exact path="/final" component={Final} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
