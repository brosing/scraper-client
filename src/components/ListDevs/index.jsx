import React from 'react';
import { connect } from 'react-redux';

import './style.css';
import { fetchDevs } from './ducks';
import LoadAndError from '../LoadAndError';

const URL = 'https://github.com';

class ListDevs extends React.Component {
  componentDidMount() {
    this.props.fetchDevs()    
  }

  render() {
    const { listDevs } = this.props;
    const { devs } = listDevs;

    return (
      <LoadAndError {...listDevs} >
        <ul className="repos-wrapper">
          {
            devs.map((dev, index) => (
              <li className="repos-item repos-item--devs" key={index}>
                <a href={URL + dev.link}>
                  <img src={dev.avatar} alt={dev.title} />
                  <p>
                    <span>{dev.title}</span>
                    {dev.snipitName}
                  </p>
                  <p>{dev.snipitDesc}</p>
                  </a>
              </li>
            ))
          }
        </ul>
      </LoadAndError>
    )
  }
}

const mapState = ({ listDevs }) => ({
  listDevs
})

export default connect(mapState, { fetchDevs })(ListDevs);
