import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import MainContainer from './containers/MainContainer';
import MapDetails from './containers/MapDetails';

const App = () => {
  return (
    <Router>
      <Fragment>
        <div className="App">
          <Route
            path="/"
            exact
            render={routeProps => <MainContainer {...routeProps} />}
          />
          <Route
            path="/map/:id"
            render={routeProps => <MapDetails {...routeProps} />}
          />
        </div>
      </Fragment>
    </Router>
  );
};

function mapStateToProps({ mapDetails }) {
  return {
    loading: mapDetails === null,
  };
}

export default connect(mapStateToProps)(App);
