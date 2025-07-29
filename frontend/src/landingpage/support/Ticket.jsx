import React from "react";

function Ticket() {
  return (
    <div className="container mt-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Support Portal</h2>
        <button className="btn btn-primary">🎫 My tickets</button>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control p-3"
          placeholder="Eg: how do I activate F&O..."
        />
      </div>

      <div className="row">
        {/* Left Section: Accordion Categories */}
        <div className="col-md-8">
          <div className="accordion" id="supportAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                >
                  ➕ Account Opening
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <ul>
                    <li><a href="#">Resident individual</a></li>
                    <li><a href="#">Minor</a></li>
                    <li><a href="#">Non Resident Indian (NRI)</a></li>
                    <li><a href="#">Company, Partnership, HUF and LLP</a></li>
                    <li><a href="#">Glossary</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Add more accordion items below as needed */}
            <div className="accordion-item mt-3">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                >
                  📄 Your Zerodha Account
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <p>Account-related help topics go here...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: News + Quick Links */}
        <div className="col-md-4">
          {/* News */}
          <div className="bg-light p-3 border-start border-warning mb-4">
            <ul>
              <li>
                <a href="#">Exclusion of F&O contracts on 8 securities from August 29, 2025</a>
              </li>
              <li>
                <a href="#">Revision in expiry day of Index and Stock derivatives contracts</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="border p-3">
            <h6>Quick links</h6>
            <ol className="ps-3">
              <li><a href="#">Track account opening</a></li>
              <li><a href="#">Track segment activation</a></li>
              <li><a href="#">Intraday margins</a></li>
              <li><a href="#">Kite user manual</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
