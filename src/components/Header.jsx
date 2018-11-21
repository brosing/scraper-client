import React, { Fragment } from 'react';
import ReactGA from 'react-ga';

// critical rendering
const headerStyle = {
  position: 'relative',
  textAlign: 'center',
  padding: '15px 10px 10px',
  background: '#000',
};

const h1Style = {
  margin: '0',
  fontSize: '18px',
  fontWeight: '600',
  color: '#fff',
};

const Header = ({ tabIndex, onChangeIndex }) => {
  ReactGA.initialize('UA-129601106-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
  console.log('ga init')

  return (
    <Fragment>
      <header style={headerStyle}>
        <h1 style={h1Style}>
          Github Trending
        </h1>
        {/* <button style={threeDotStyle}>&#8230;</button> */}
      </header>
  
      <div className="header-button-wrapper clearfix">
        <button
          type="button"
          className={`header-button ${tabIndex === 0 ? 'active' : ''}`}
          onClick={() => {
            console.log('click')
            onChangeIndex(0)
            ReactGA.event({
              category: 'User',
              action: 'Click Button'
            })
          }}
        >
          Repositories
        </button>
        <button
          type="button"
          className={`header-button ${tabIndex === 1 ? 'active' : ''}`}
          onClick={() => onChangeIndex(1)}
        >
          Developers
        </button>
      </div>
    </Fragment>
  );
}

export default Header;
