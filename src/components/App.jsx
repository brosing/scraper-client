import React, { Component, Fragment } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { connect } from 'react-redux';

import Header from './Header';
import ListRepos from './ListRepos';
import ListDevs from './ListDevs';

class App extends Component {
  state = {
    tabIndex: 0,
  }

  changeSwipe = (index) => {
    this.setState({ tabIndex: index });
  }

  render() {
    const reposLength = this.props.repos.length;
    const { tabIndex } = this.state;

    return (
      <Fragment>

        <Header
          tabIndex={tabIndex}
          onChangeIndex={this.changeSwipe}
        />

        <SwipeableViews
          index={tabIndex}
          onChangeIndex={this.changeSwipe}
          animateHeight={reposLength !== 0}
        >
          <ListRepos />
          <ListDevs tabIndex={tabIndex} />
        </SwipeableViews>

      </Fragment>
    );
  }
}

const mapState = ({ listRepos }) => ({
  repos: listRepos.repos,
});

export default connect(mapState)(App);
