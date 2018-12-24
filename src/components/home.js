import React, { Component } from "react";
import "../templates/home.css";
import pic from "../pictures/jwpic.PNG";

class Home extends Component {
  render() {
    return (
      <div>
        <h1> Who am I? </h1>
        <span className="container">
          <p className="item1">
            Born and raised in Santa Rosa, California. I attended the Santa Rosa
            Junior College from 2013 to 2018. After graduation, I transferred to
            University of California, Davis. Before I started at UCD, I interned
            at CalSTRS and had the opportunity to build programs in both Python
            and R. As a first generation student I'm dedicated to change the
            world and leave a footprint.
          </p>
          <img src={pic} className="pic" alt="joshua_wright" />
          <span className="item2">
            <hr />
            <h2>Skills</h2>
            <p className="skills">
              <b>Productive: </b> Python, R, HTML, CSS
              <br />
              <b>Familiar: </b> C++, JavaScript, ReactJS, Django, SQL
              <br />
              <b>Software Development: </b> Git/Github, Heroku
              <br />
              <b>Quantitative: </b> Probability, Multivariable Calculus, Linear
              Algebra, Discrete Math
            </p>
          </span>
        </span>
      </div>
    );
  }
}

export default Home;
