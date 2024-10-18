"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    // Importar Bootstrap JS solo en el cliente
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPillsExample" aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#"><img src="/images/bootstrap-logo.svg" width="36" /></a>
    <div className="collapse navbar-collapse" id="navbarPillsExample">
      <ul className="navbar-nav navbar-nav-pills">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Team</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Projects</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Profile</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}
