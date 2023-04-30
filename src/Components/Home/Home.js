import React from "react";
import "./home.css";
import tv from "../../assets/tv.png";
import download from "../../assets/download.png";
import child from "../../assets/children.png";
import watch from "../../assets/watch.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, colors } from "@mui/material";

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

      <div className="sub-container">
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
          <h1>Frequently Asked Question</h1>
          <Box sx={{ marginLeft: "40px" }}>
            <Accordion
              sx={{
                background: "#0f1a4e",
                color: "#fff",
                width: "90vw",
                borderBottom: " 2px solid black",
              }}
            >
              <AccordionSummary
                sx={{ height: "100px" }}
                expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ fontSize: "24px" }}>
                  What is Netflix?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontSize: "24px" }}>
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries and more
                  – on thousands of internet-connected devices. You can watch as
                  much as you want, whenever you want, without a single ad – all
                  for one low monthly price. There's always something new to
                  discover, and new TV shows and movies are added every week!
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                background: "#0f1a4e",
                color: "#fff",
                width: "90vw",
                borderBottom: " 2px solid black",
              }}
            >
              <AccordionSummary
                sx={{ height: "100px" }}
                expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ fontSize: "24px" }}>
                  How much does Netflix cost?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontSize: "24px" }}>
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                background: "#0f1a4e",
                color: "#fff",
                width: "90vw",
                borderBottom: " 2px solid black",
              }}
            >
              <AccordionSummary
                sx={{ height: "100px" }}
                expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ fontSize: "24px" }}>
                  Where can I watch?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontSize: "24px" }}>
                  Watch anywhere, anytime. Sign in with your Netflix account to
                  watch instantly on the web at netflix.com from your personal
                  computer or on any internet-connected device that offers the
                  Netflix app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles. You can also
                  download your favourite shows with the iOS, Android, or
                  Windows 10 app. Use downloads to watch while you're on the go
                  and without an internet connection. Take Netflix with you
                  anywhere.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                background: "#0f1a4e",
                color: "#fff",
                width: "90vw",
                borderBottom: " 2px solid black",
              }}
            >
              <AccordionSummary
                sx={{ height: "100px" }}
                expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ fontSize: "24px" }}>
                  How do I cancel?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontSize: "24px" }}>
                  Netflix is flexible. There are no annoying contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                background: "#0f1a4e",
                color: "#fff",
                width: "90vw",
                borderBottom: " 2px solid black",
              }}
            >
              <AccordionSummary
                sx={{ height: "100px" }}
                expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ fontSize: "24px" }}>
                  What can I watch on Netflix?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontSize: "24px" }}>
                  Netflix has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning Netflix
                  originals, and more. Watch as much as you want, anytime you
                  want.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                background: "#0f1a4e",
                color: "#fff",
                width: "90vw",
                borderBottom: " 2px solid black",
              }}
            >
              <AccordionSummary
                sx={{ height: "100px" }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ fontSize: "24px" }}>
                  Is Netflix good for kids?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontSize: "24px" }}>
                  The Netflix Kids experience is included in your membership to
                  give parents control while kids enjoy family-friendly TV shows
                  and films in their own space. Kids profiles come with
                  PIN-protected parental controls that let you restrict the
                  maturity rating of content kids can watch and block specific
                  titles you don’t want kids to see.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <h2>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h2>
        </div>
        <div className="banner-inputs-below">
          <input type="text" className="email" placeholder="Email"></input>
          <button className="getstarted">Get Started ❱</button>
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
