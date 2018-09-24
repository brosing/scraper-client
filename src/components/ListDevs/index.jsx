import React from 'react';
import { connect } from 'react-redux';

import './style.css';
import { fetchDevs } from './ducks';
import LoadAndError from '../LoadAndError';
import SortingButtonGroup from '../SortingButtonGroup';

const URL = 'https://github.com';

class ListDevs extends React.Component {
  componentDidMount() {
    this.props.fetchDevs();
  }

  render() {
    const { listDevs } = this.props;
    const { devs } = listDevs;

    return (
      <div className="repos-wrapper">
        <SortingButtonGroup name="sortDevs" />

        <LoadAndError {...listDevs}>
          <ul>
            {
              devs.map((dev, index) => (
                <li className="repos-item repos-item--devs" key={index.toString()}>
                  <a href={URL + dev.link}>
                    <img src={dev.avatar} alt={dev.title} />
                    <p>
                      <span>{dev.title}</span>
                      {dev.itemName}
                    </p>
                    <p>{dev.itemDesc}</p>
                    </a>
                </li>
              ))
            }
          </ul>
        </LoadAndError>
      </div>
    )
  }
}

const mapState = ({ listDevs }) => ({
  listDevs,
});

export default connect(mapState, { fetchDevs })(ListDevs);
