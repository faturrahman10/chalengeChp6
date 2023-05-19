import React from "react";

//import react router dom
import { Switch, Route } from "react-router-dom";

//import component Home
import Home from "./pages/Home";

//import component Post Index
import SearchCars from "./pages/posts/SearchCars";

function App() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#f1f3ff" }}>
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <div style={{ width: "100px", height: "34px", backgroundColor: "#0d28a6" }}></div>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse float-end clearfixs navbar-collapse d-flex justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: "#000" }} href="#ourServices">
                                    Our Services
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: "#000" }} href="#whyUs">
                                    Why Us
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: "#000" }} href="#testimonial">
                                    Testimonial
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: "#000" }} href="#faq">
                                    FAQ
                                </a>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn text-light fw-bold" style={{ backgroundColor: "#5cb85f" }}>
                                    Register
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/cars" component={SearchCars} />
            </Switch>
        </div>
    );
}

export default App;
