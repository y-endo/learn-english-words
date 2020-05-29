import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '~/styles/reset.scss';
import '~/styles/base.scss';

import IndexPage from '~/pages/Index';

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={IndexPage} />
        </Switch>
      </Router>
    </React.StrictMode>
  );
};

export default App;
