import React, { Fragment } from 'react';

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

// const threeDotStyle = {
//   position: 'absolute',
//   right: '0',
//   top: '0',
//   width: '50px',
//   height: '50px',
//   padding: '0',
//   textAlign: 'center',
//   fontSize: '21px',
//   background: 'transparent',
//   border: '0',
//   color: '#fff',
// }

const Header = ({ tabIndex, onChangeIndex }) => (
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
        onClick={() => onChangeIndex(0)}
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

export default Header;
