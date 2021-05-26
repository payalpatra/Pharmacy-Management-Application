import React from "react";
import {NavLink} from "react-router-dom";
import "../styles/Footer.css"

function Footer() {
  return (
<div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><NavLink exact to="#">Medicines</NavLink></li>
                            <li><NavLink exact to="#">Orders</NavLink></li>
                            <li><NavLink exact to="#">Hosting</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><NavLink exact to="#">Company</NavLink></li>
                            <li><NavLink exact to="#">Team</NavLink></li>
                            <li><NavLink exact to="#">Careers</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>E-pharmacy</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                    </div>
                   
                </div>
                <p className="copyright">E-pharmacy © 2021</p>
            </div>
        </footer>
    </div>
  );
}

export default Footer;
