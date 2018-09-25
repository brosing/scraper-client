import React from 'react';

class LoadAndError extends React.PureComponent {
  render() {
    const {
      isLoading, isError, errorMsg, children,
    } = this.props;

    if (isLoading) {
      return (
        <div className="loader">
          <div className="inner one" />
          <div className="inner two" />
          <div className="inner three" />
        </div>
      );
    }

    if (isError) {
      return (
        <p className="error-message">
          { errorMsg }
        </p>
      );
    }

    return children;
  }
}

export default LoadAndError;
