import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Dashboard from './Dashboard';
import SurveyNew from './SurveyNew';
import Landing from './Landing';

class App extends React.Component {
  // need to get this to be able to call action creators
  componentDidMount() {
    this.props.fetchUser();
  }

  render(){
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Landing} />
            <Route path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
