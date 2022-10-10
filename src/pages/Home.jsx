import React from "react";
import Logo2 from "../assets/Asset 3@3x.png";
import "./Home.css";

function Home() {
  return (
    <div className="frontpage">
      <section className="hero__section">
        <img className="logo2" src={Logo2} alt="logo 2" />
      </section>
      <section className="classes" id="classes">
        <div className="classes-description">
          <h2>Jewelry tailored for you</h2>
        </div>
        <div className="cards">
          <div className="card__div">
            <h3>Luxury</h3>
            <img
              className="card"
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
            />
          </div>
          <div className="card__div">
            <h3>Creative</h3>
            <img
              className="card"
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt=""
            />
          </div>
          <div className="card__div">
            <h3>Elegance</h3>
            <img
              className="card"
              src="https://images.unsplash.com/photo-1569397288884-4d43d6738fbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
