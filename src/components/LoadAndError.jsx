import React from 'react';

class LoadAndError extends React.Component {
  state = {
    loading: 'Loading'
  }

  componentDidMount() {
    this.interval = setInterval(this.timer, 1000);
  }

  componentDidUpdate() {
    if (!this.props.isLoading) {
      clearInterval(this.interval)
    }
  }

  timer = () => {
    const slicing = this.state.loading.slice(-4);
    const dots = '....';

    if (slicing === dots) {
      this.setState({
        loading: 'loading'
      })
    } else {
      this.setState((state) => ({
        loading: state.loading += '.'
      }))
    }
  }
  
  render() {
    const { isLoading, isError, errorMsg, children } = this.props;

    if (isLoading) {
      return (
        <p className="load-message">{this.state.loading}</p>
      )
    }
  
    if (isError) {
      return (
        <p className="error-message">{ errorMsg }</p>
      )
    }
  
    return children
  }
}

export default LoadAndError;
