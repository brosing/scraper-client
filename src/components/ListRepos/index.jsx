import React from 'react';
import { connect } from 'react-redux';

import './style.css';
import { fetchRepos } from './ducks';

const URL = 'https://github.com';

class ListRepos extends React.Component {
  componentDidMount() {
    this.props.fetchRepos();
  }

  openModal = (link) => {
    console.log(link)
  }

  render() {
    return (
      <ul className="repos-wrapper">
        {
          this.props.repos.map((repo, index) => {
            const splittedTitle = repo.title.split('/');
            const title = splittedTitle.map(title => title.trim());

            return (
              <li key={index} className="repos-item">
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

                <button
                  className="repos-item__button"
                  onClick={() => this.openModal(repo.link)}
                >
                  Peek README.md
                </button>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

const mapState = ({ listRepos }) => ({
  repos: listRepos.repos
})

export default connect(mapState, { fetchRepos })(ListRepos);
