import React from 'react';
import { connect } from 'react-redux';

import { fetchRepos } from '../ListRepos/ducks';
import { fetchDevs } from '../ListDevs/ducks';

import './style.css';

class SortingButtonGroup extends React.PureComponent {
  state = {
    sortBy: 'today',
  }

  componentDidUpdate(prevProps, prevState) {
    const { props, state } = this;

    if (prevState.sortBy !== state.sortBy) {
      // handle sorting for fetch repos
      if (props.name === 'sortRepos') {
        props.fetchRepos(state.sortBy);
      }

      // handle sorting for fetch devs
      if (props.name === 'sortDevs') {
        props.fetchDevs(state.sortBy);
      }
    }
  }

  handleChange = (e) => {
    this.setState({
      sortBy: e.target.value,
    });
  }

  render() {
    const { name } = this.props;

    return (
      <div className="sorting-button-group">
        <div className="sorting-button">
          <input
            type="radio"
            name={name}
            onChange={this.handleChange}
            id={`${name}Today`}
            value="today"
            defaultChecked
          />
          <label htmlFor={`${name}Today`}>
            Today
          </label>
        </div>

        <div className="sorting-button">
          <input
            type="radio"
            name={name}
            onChange={this.handleChange}
            id={`${name}Weekly`}
            value="weekly"
          />
          <label htmlFor={`${name}Weekly`}>
            This Week
          </label>
        </div>

        {
          name === 'sortRepos' && (
            <div className="sorting-button">
              <input
                type="radio"
                name={name}
                onChange={this.handleChange}
                id={`${name}Monthly`}
                value="monthly"
              />
              <label htmlFor={`${name}Monthly`}>
                This Month
              </label>
            </div>
          )
        }
      </div>
    );
  }
}

export default connect(null, { fetchRepos, fetchDevs })(SortingButtonGroup);
