import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <header className="banner">
        <img src="/images/fundo.png" alt="Imagem principal da página" />

        <div style={{ position: "relative", bottom: 0, top: "-25rem" }}>
          <img src="/images/logo.png" alt="Logo Organo" />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: " 0px 25px",
            alignItems: "center"
          }}
        >
          <Link to={"https://twitter.com/Jasspionn"} target="_blank">
            <img src="/images/tw.png" alt="Logo Twitter" />
          </Link>

          <Link to={"https://www.linkedin.com/in/julianorafael/"} target="_blank" style={{width: "40px", padding: "0 15px"}}>
            <img src="/images/lk.png" alt="Logo Linkedin" />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Banner;
