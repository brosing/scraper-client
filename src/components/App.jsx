import React, { Component, Fragment } from 'react';
import SwipeableViews from 'react-swipeable-views';

import Header from './Header';

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
        >
          <div>
            Repos
          </div>
          <div>
            Devs
          </div>
        </SwipeableViews>

      </Fragment>
    )
  }
}

export default App;
