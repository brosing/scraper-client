import React from 'react';
import { connect } from 'react-redux';
import { fetchRepos } from './ducks';

class ListRepos extends React.COmponent {
  componentDidMount() {
    this.props.fetchRepos();
  }

  render() {
    return (
      <ul className="repos">
        <li>list repos</li>
      </ul>
    )
  }
}

const stateToProps = (state) => ({
  repos: state.repos
})

export default connect(stateToProps, { fetchRepos })(ListRepos);
