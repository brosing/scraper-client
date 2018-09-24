import React from 'react';
import { connect } from 'react-redux';

import './style.css';
import { fetchRepos } from './ducks';
import LoadAndError from '../LoadAndError';
import SortingButtonGroup from '../SortingButtonGroup';

const URL = 'https://github.com';

class ListRepos extends React.Component {
  state ={
    modalIsOpen: false,
  }

  componentDidMount() {
    this.props.fetchRepos();
  }

  render() {
    const { listRepos } = this.props;
    const { repos } = listRepos;

    return (
      <div className="repos-wrapper">
        <SortingButtonGroup name="sortRepos"/>

        <LoadAndError {...listRepos}>
          <ul>
            {
              repos.map((repo, index) => {
                const splittedTitle = repo.title.split('/');
                const title = splittedTitle.map(title => title.trim());

                return (
                  <li key={index.toString()} className="repos-item">
                    <a href={URL + repo.link}>
                      <h3>
                        {title[0]} / <strong>{title[1]}</strong>
                      </h3>
                      <p>{repo.description}</p>

                      <div className="repos-item__details">
                        <span>
                          {repo.lang == null ? '-' : repo.lang}
                        </span>
                        <span>{repo.stars} starts</span>
                        <span>{repo.forks} forks</span>
                      </div>
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </LoadAndError>
      </div>
    )
  }
}

const mapState = ({ listRepos }) => ({ listRepos })

export default connect(mapState, { fetchRepos })(ListRepos);
