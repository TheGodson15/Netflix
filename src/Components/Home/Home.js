import React from "react";
import "./home.css";
import tv from "../../assets/tv.png";
import download from "../../assets/download.png";
import child from "../../assets/children.png";
import watch from "../../assets/watch.png";

export default function Home() {
  return (
    <div className="main-container">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="logo-container">
          <img
            src="https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media/netflix.svg"
            className="logo"
            alt=""
          />
        </div>

        <div className="buttons">
          <select>
            <option>English</option>
            <option>Hindi</option>
          </select>
          <button className="signin">Sign in</button>
        </div>
      </div>
      <div className="banner-text">
        <h1>Unlimited movies, TV shows and more</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
      </div>
      <div className="banner-inputs">
        <input type="text" className="email" placeholder="Email"></input>
        <button className="getstarted">Get Started ❱</button>
      </div>

      <div className="sub-cards">
        <div className="cards-container">
          <div className="cards">
            <img src={tv} alt="" />
            <h2>Enjoy on your TV</h2>
            <h3>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h3>
          </div>
          <div className="cards">
            <img src={download} alt="" />
            <h2>Download your shows to watch offline</h2>
            <h3>
              Save your favourites easily and always have something to watch.
            </h3>
          </div>
          <div className="cards">
            <img src={watch} alt="" />
            <h2>Watch everywhere</h2>
            <h3>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </h3>
          </div>
          <div className="cards">
            <img src={child} alt="" />
            <h2>Create profiles for kids</h2>
            <h3>
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </h3>
          </div>
        </div>
      </div>
      <footer className="footer">
        <h2>Questions? Call 000-800-919-1694</h2>
        <div className="rows">
          <div className="col">
            <a href="" className="flink">
              FAQ
            </a>
            <a href="" className="flink">
              Media Center
            </a>
            <a href="" className="flink">
              Ways to Watch
            </a>
            <a href="" className="flink">
              Cookie Preferences
            </a>
            <a href="" className="flink">
              Speed Test
            </a>
          </div>
          <div className="col">
            <a href="" className="flink">
              Help Center
            </a>
            <a href="" className="flink">
              Investor Relations
            </a>
            <a href="" className="flink">
              Terms of Use
            </a>
            <a href="" className="flink">
              Corporate Information
            </a>
            <a href="" className="flink">
              Legal Notices
            </a>
          </div>
          <div className="col">
            <a href="" className="flink">
              Account
            </a>
            <a href="" className="flink">
              Jobs
            </a>
            <a href="" className="flink">
              Privacy
            </a>
            <a href="" className="flink">
              Contact Us
            </a>
            <a href="" className="flink">
              Only on Netflix
            </a>
          </div>
        </div>
        <div className="lang-buttons">
          <select>
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>
        <p>Netflix India</p>
      </footer>
    </div>
  );
}
