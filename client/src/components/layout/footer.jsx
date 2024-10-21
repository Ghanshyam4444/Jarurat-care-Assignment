import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div class="container-fluid bg-dark mt-5">
        <div class="row">
          <div class="col-lg-4 p-4">
            <h3 class="h-font fw-bold fs-3">About me</h3>
            <p>
              "Hi, I'm Ghanshyam, a Full-Stack Developer who thrives on creating
              dynamic, user-centric web applications. From front-end design to
              back-end functionality, I build scalable and efficient solutions
              that deliver seamless digital experiences."
            </p>
          </div>
          <div class="col-lg-3 p-4">
            <h5 class="mb-3">Links</h5>
            <NavLink
              to="home"
              class="d-inline-block"
              style={{ textDecoration: "none" }}
            >
              LinkedIn
            </NavLink>
            <br />
            <NavLink
              to="home"
              class="d-inline-block mb-2 text-dark text-decoration-none"
              style={{ textDecoration: "none" }}
            >
              CodeStudio
            </NavLink>
            <br />
            <NavLink
              to="home"
              class="d-inline-block mb-2 text-dark text-decoration-none"
              style={{ textDecoration: "none" }}
            >
              LeetCode
            </NavLink>
            <br />
            <NavLink
              to="home"
              class="d-inline-block mb-2 text-dark text-decoration-none"
              style={{ textDecoration: "none" }}
            >
              GitHub
            </NavLink>
            <br />
            <NavLink
              to="home"
              class="d-inline-block mb-2 text-dark text-decoration-none"
              style={{ textDecoration: "none" }}
            >
              Instagram
            </NavLink>
            <br />
            <br />
          </div>
          <div class="col-lg-3 p-4">
            <h5 class="mb-3">Contact Us</h5>
            <a
              href="tel:+9034040304"
              className="d-inline-block text-decoration-none mb-2"
            >
              <i className="bi bi-telephone me-2"></i>9034040304
            </a>
            <br />
            <a
              href="mailto:ghanshyammangla15@gmail.com"
              class="d-inline-block text-decoration-none mb-2"
            >
              <i className="bi bi-envelope me-2"></i>Email
            </a>
          </div>
          <div class="col-lg-2 p-4">
            <h5 class="mb-3">Follow us</h5>
            <a
              href="https://www.facebook.com/profile.php?id=100022346324168"
              className="d-inline-block text-decoration-none mb-2"
            >
              <i className="bi bi-facebook me-2"></i>Facebook
            </a>
            <br />
            <a
              href="https://www.instagram.com/mangla.ghanshyam/"
              className="d-inline-block text-decoration-none mb-2"
            >
              <i
                className="bi bi-instagram me-2"
                style={{ color: "white" }}
              ></i>
              Instagram
            </a>
          </div>
        </div>
      </div>
      <h6 class="text-center bg-dark text-white pb-3 m-0">
        Designed and Devloped by - GHANSHYAM MANGLA
      </h6>
    </>
  );
};

export default Footer;
