import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      <section className="card__section">
        <div className="card">
          <img
            className="card__img"
            src="https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <div className="card__description">
            <h3>Luxury</h3>
            <p>
              Listen to your inner self, your original self, your new self, your
              desired self , wear that sparkle, a talisman that leads to
              conviction, an expressive person who wishes to live vividly, and
              creates your life, proof of your existence.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            className="card__img2"
            src="https://images.unsplash.com/photo-1549439602-43ebca2327af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <div className="card__description">
            <h3>Elegance</h3>
            <p>
              Mangata and Gallo is a jewelry brand based on the concept of
              "ELEGANT JEWELRY". Since ancient times, jewelry has been used as a
              talisman that protects the owner and as a sign that expresses
              principles. Inspired by this history, we propose jewelry that
              supports self-expression and proves one's existence for those who
              want to live in their own way.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            className="card__img2"
            src="https://images.unsplash.com/photo-1569388330292-79cc1ec67270?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
          <div className="card__description">
            <h3>Golden</h3>
            <p>
              Gold as the sun, sacred silver, and colored stones that confine
              the colors of this world. Accessory as a talisman entrusted with
              wishes, protecting and helping people since ancient times. Jewelry
              is the embodiment of the sparkle of the heart.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
