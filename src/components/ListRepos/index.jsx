import React from 'react';
import { connect } from 'react-redux';

import './style.css';
import { fetchRepos, fetchReadme } from './ducks';
// import Modal from './Modal'

const URL = 'https://github.com';

class ListRepos extends React.Component {
  state ={
    modalIsOpen: false
  }

  componentDidMount() {
    this.props.fetchRepos();
  }

  // openModal = (link) => {
  //   this.setState({ modalIsOpen: true });
  //   this.props.fetchReadme(link);
  // }

  // closeModal = () => {
  //   this.setState({ modalIsOpen: false });
  // }

  render() {
    const { repos, isError, errorMsg } = this.props.listRepos;

    return isError
      ? (
        <p className="error-message">{ errorMsg }</p>
      )
      : (
        <React.Fragment>
          <ul className="repos-wrapper">
            {
              repos.map((repo, index) => {
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

                    {/* <button
                      className="repos-item__button"
                      onClick={() => this.openModal(repo.link)}
                    >
                      Peek README.md
                    </button> */}
                  </li>
                )
              })
            }
          </ul>

          {/* <Modal
            readme={this.props.readme}
            modalIsOpen={this.state.modalIsOpen}
            closeModal={this.closeModal}
          /> */}
        </React.Fragment>
      )
  }
}

const mapState = ({ listRepos, readme }) => ({
  listRepos,
  readme
})

export default connect(mapState, {
  fetchRepos, fetchReadme
})(ListRepos);
