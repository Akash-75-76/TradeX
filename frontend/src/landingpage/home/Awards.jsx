import React from 'react';

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
          />
        </div>

        <div className="col-md-6">
          <h1 className="mb-3">Largest stock broker in India</h1>
          <p className="mb-4">
            2+ million Zerodha clients contribute to over 15% of all retail order
            volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul >
                <li>Stocks & IPOs</li>
                <li>Mutual Funds</li>
                <li>Bonds & ETFs</li>
              </ul>
            </div>
          </div>

          <img
            src="pressLogos.png"
            alt="Press Logos"
            className="img-fluid mt-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
