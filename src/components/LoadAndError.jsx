import React from 'react';

class LoadAndError extends React.PureComponent {
  render() {
    const {
      isLoading, isError, errorMsg, children,
    } = this.props;

    if (isLoading) {
      return (
        <p className="load-message">Loading</p>
      );
    }

    if (isError) {
      return (
        <p className="error-message">{ errorMsg }</p>
      );
    }

    return children;
  }
}

export default LoadAndError;
