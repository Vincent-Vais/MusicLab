import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__grid">
        <div className="footer__col">
          <ul className="footer__list">
            <li className="footer__item">
              <i class="fab fa-whatsapp" style={{ color: "#128C7E" }}></i>{" "}
              +7(913)222-1941
            </li>
            <li className="footer__item">
              <i class="fab fa-whatsapp" style={{ color: "#128C7E" }}></i>{" "}
              +7(913)222-1941
            </li>
            <li className="footer__item">
              <i class="fab fa-whatsapp" style={{ color: "#128C7E" }}></i>{" "}
              +7(913)222-1941
            </li>
            <li className="footer__item">
              <i class="fab fa-whatsapp" style={{ color: "#128C7E" }}></i>{" "}
              +7(913)222-1941
            </li>
            <li className="footer__item">
              <i class="fab fa-whatsapp" style={{ color: "#128C7E" }}></i>{" "}
              +7(913)222-1941
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <h4 className="footer__sign">Created By Vincent Vais</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
