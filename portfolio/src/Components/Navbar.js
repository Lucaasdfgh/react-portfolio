import React from 'react'
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div>
      <nav id="nav-bar-content" className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/index.html">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
            <a className="nav-link">Projects<Link className="link" to="/invoices"></Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Experience<Link className="link" to="/invoices"></Link></a>
            </li>
          <li className="nav-item active">
          <a className="nav-link">Invoices<Link className="link" to="/invoices"></Link></a>
          </li>
          
              </ul>
            </div>
          </nav>
        </div >
            
        
    )
}
