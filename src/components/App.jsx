import React, { Component, Fragment } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { connect } from 'react-redux';

import Header from './Header';
import ListRepos from './ListRepos';
import ListDevs from './ListDevs';
import { loadGTM, loadGA } from '../helpers/tracker';

class App extends Component {
  state = {
    tabIndex: 0,
  }

  componentDidMount() {
    loadGTM('GTM-57QG7WJ');
    loadGA('UA-132049781-1');
  }

  changeSwipe = (index) => {
    this.setState({ tabIndex: index });
    const pageUrl = `?index=${index}`;
    window.history.pushState('', '', pageUrl);
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
