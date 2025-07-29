import React from 'react';

function Team() {
  return (
    <div className="container text-center my-5">
      <h2 className="fw-bold mb-5">People</h2>
      <div className="row align-items-center justify-content-center">
        {/* Image Section */}
        <div className="col-md-4 mb-4 mb-md-0">
          <img
            src="/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="img-fluid rounded-circle"
            style={{ width: "250px", height: "250px", objectFit: "cover" }}
          />
          <h4 className="mt-3 mb-1">Nithin Kamath</h4>
          <p className="text-muted">Founder, CEO</p>
        </div>

        {/* Text Section */}
        <div className="col-md-6 text-start">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced
            during his decade long stint as a trader. Today, Zerodha has changed the landscape
            of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the
            Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="#" className="text-decoration-none text-primary">Homepage</a> /{" "}
            <a href="#" className="text-decoration-none text-primary">TradingQnA</a> /{" "}
            <a href="#" className="text-decoration-none text-primary">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
