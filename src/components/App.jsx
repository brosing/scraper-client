import React, { Component, Fragment } from 'react';
import SwipeableViews from 'react-swipeable-views';

import Header from './Header';
import ListRepos from './ListRepos'
import ListDevs from './ListDevs'

class App extends Component {
  state = {
    tabIndex: 0
  }

  changeSwipe = (index) => {
    this.setState({ tabIndex: index })
  }

  render() {
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
          animateHeight={true}
          style={{ minHeight: '100%' }}
        >
          <ListRepos />
          <ListDevs tabIndex={tabIndex}/>
        </SwipeableViews>

      </Fragment>
    )
  }
}

export default App;
