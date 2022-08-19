import React from 'react';
import './Quote.css';

class Quote extends React.PureComponent {
  render() {
    return (
      <div className="quoteSection">
        <p>
          Many who have had an opportunity of knowing any more about mathematics
          confuse it with arithmetic, and consider it an arid science. In reality,
          however, it is a science which requires a great amount of imagination.
          — Sofia Kovalevskaya
        </p>
      </div>
    );
  }
}

export default Quote;
