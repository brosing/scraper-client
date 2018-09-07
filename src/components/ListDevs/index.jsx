import React from 'react';
import { connect } from 'react-redux';

import './style.css';
import { fetchDevs } from './ducks';

const URL = 'https://github.com';

class ListDevs extends React.Component {
  componentDidMount() {
    this.props.fetchDevs()    
  }

  render() {
    return (
      <ul className="repos-wrapper">
        {
          this.props.devs.map((dev, index) => (
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
    )
  }
}

const mapState = ({ listDevs }) => ({
  devs: listDevs.devs
})

export default connect(mapState, { fetchDevs })(ListDevs);
