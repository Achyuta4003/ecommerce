import React from "react";
import "./About.css";
import { Typography } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
const About = () => {

    return (
        <div className="aboutSection">
            <div></div>
            <div className="aboutSectionGradient"></div>
            <div className="aboutSectionContainer">
                <Typography component="h1">About Us</Typography>

                <div className="visionMission">
                    <div>
                        <div className="mission">
                            <h2>Our Mission</h2>
                            <p>We strive to offer our customers the lowest possible prices, the best available selection, and the utmost convenience.</p>
                        </div>
                        <div className="vision">
                            <h2>Our Vision</h2>
                            <p> To be Earth's most customer-centric company, where customers can find and discover anything they might want to buy online.</p>
                        </div>
                    </div>
                    <div className="aboutSectionContainer2">
                        <Typography component="h2">Our Brands</Typography>
                        <a
                            href="https://www.youtube.com/"
                            target="blank"
                        >
                            <YouTubeIcon className="youtubeSvgIcon" />
                        </a>

                        <a href="https://instagram.com/" target="blank">
                            <InstagramIcon className="instagramSvgIcon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
