import React from 'react';

import './style.css'

class SortingButtonGroup extends React.Component {

  render() {
    const { name } = this.props;

    return (
      <div className="sorting-button-group">
        <div className="sorting-button">
          <input type="radio" name={name} id={`${name}Today`}/>
          <label htmlFor={`${name}Today`}>Today</label>
        </div>

        <div className="sorting-button">
          <input type="radio" name={name} id={`${name}ThisWeek`}/>
          <label htmlFor={`${name}ThisWeek`}>This Week</label>
        </div>

        <div className="sorting-button">
          <input type="radio" name={name} id={`${name}ThisMonth`}/>
          <label htmlFor={`${name}ThisMonth`}>This Month</label>
        </div>
      </div>
    )
  }
}

export default SortingButtonGroup;
