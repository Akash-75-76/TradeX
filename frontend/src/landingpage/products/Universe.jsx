import React from 'react';

function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <div className="col-12 mb-4">
                    <h1>The Zerodha Universe</h1>
                    <p>
                        Extend your trading and investment experience even further with our
                        partner platforms
                    </p>
                </div>

                <div className="col-4 p-3">
                    <img
                        src="/smallcaseLogo.png"
                        alt="Smallcase Logo"
                        className="img-fluid d-block mx-auto"
                        style={{ maxHeight: "100px", objectFit: "contain" }}
                    />
                    <p className="text-small text-muted mt-2">Thematic investment platform</p>
                </div>

                <div className="col-4 p-3">
                    <img
                        src="/streakLogo.png"
                        alt="Streak Logo"
                        className="img-fluid d-block mx-auto"
                        style={{ maxHeight: "100px", objectFit: "contain" }}
                    />
                    <p className="text-small text-muted mt-2">Thematic investment platform</p>
                </div>

                <div className="col-4 p-3">
                    <img
                        src="/sensibullLogo.svg"
                        alt="Sensibull Logo"
                        className="img-fluid d-block mx-auto"
                        style={{ maxHeight: "100px", objectFit: "contain" }}
                    />
                    <p className="text-small text-muted mt-2">Thematic investment platform</p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img
                        src="/dittoLogo.png"
                        alt="Ditto Logo"
                        className="img-fluid d-block mx-auto"
                        style={{ maxHeight: "100px", objectFit: "contain" }}
                    />
                    <p className="text-small text-muted mt-2">Thematic investment platform</p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img
                        src="/zerodhaFundhouse.png"
                        alt="Zerodha Fundhouse Logo"
                        className="img-fluid d-block mx-auto"
                        style={{ maxHeight: "100px", objectFit: "contain" }}
                    />
                    <p className="text-small text-muted mt-2">Thematic investment platform</p>
                </div>

                <div className="col-4 p-3 mt-5">
                    <img
                        src="/tijori.svg"
                        alt="Tijori Logo"
                        className="img-fluid d-block mx-auto"
                        style={{ maxHeight: "100px", objectFit: "contain" }}
                    />
                    <p className="text-small text-muted mt-2">Thematic investment platform</p>
                </div>

                <div className="col-12 d-flex justify-content-center mt-4 mb-5">
                    <button className="btn btn-primary fs-5" style={{ width: "20%" }}>
                        Sign up for free
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Universe;
