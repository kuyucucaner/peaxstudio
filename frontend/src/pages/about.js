import React from "react";
import "../styles/about.css";
import MissionImage from "../images/mission.png";
import AboutHeaderImage from "../images/aboutheader.webp";
import VisionImage from "../images/vision.jpg";
import ValueImage from "../images/value.jpg";

const About = () => {
  return (
    <section className="about-section" id="about-section">
      <div className="about-box">
        <img
          src={AboutHeaderImage}
          alt="Peax Studio Creative Design"
          className="about-image"
        />
        <div className="about-content">
          <h1 className="about-title">About Peax Studio</h1>
          <p className="about-description">
            Peax Studio is a creative design and development studio dedicated to
            bringing innovative ideas to life. We specialize in crafting unique
            digital experiences, blending aesthetics with functionality to
            deliver impactful solutions. Our team of passionate professionals
            thrives on challenges and is committed to exceeding client
            expectations. At Peax Studio, we believe in the power of
            collaboration and creativity. Our mission is to transform concepts
            into reality by utilizing cutting-edge technologies and design
            principles. Whether it's web design, branding, or digital marketing,
            we approach each project with a fresh perspective, ensuring that
            every detail aligns with our clients' vision and goals. We are not
            just a studio; we are your partners in success. Join us on this
            journey to elevate your brand and create lasting impressions in the
            digital world. digital world. digital world. digital world.
            journey to elevate your brand and create lasting impressions 
            journey to elevate your brand and create lasting impressions  
            journey to elevate your brand and create lasting impressions  
          </p>
        </div>
      </div>
      <div className="about-sub-box">
          <p className="about-description">
            Our mission is to deliver innovative, efficient solutions that go
            beyond merely meeting client expectations. We are driven by a
            commitment to excellence, seeking to transform challenges into
            opportunities through creative vision and the latest technological
            advancements. Each project we undertake is an opportunity to set a
            new standard of success, where our dedication to quality and detail
            shines through.
          </p>
        </div>


      <div className="about-achievements">
        <div className="about-x">
          <div className="about-text-section">
          <h2 className="about-subtitle">What Drives Us</h2>
          <p className="about-description">
            Our mission is to deliver innovative, efficient solutions that go
            beyond merely meeting client expectations. We are driven by a
            commitment to excellence, seeking to transform challenges into
            opportunities through creative vision and the latest technological
            advancements. Each project we undertake is an opportunity to set a
            new standard of success, where our dedication to quality and detail
            shines through. At the heart of our mission is the belief in
            building lasting relationships with our client.
          </p>
          </div>
          <img
            src={MissionImage}
            alt="Vision Illustration"
            className="about-subimage"
          ></img>
        </div>

        <div className="about-x">
          <img
            src={VisionImage}
            alt="Vision Illustration"
            className="about-subimage"
          ></img>
          <div className="about-text-section">
          <h2 className="about-subtitle">Vision</h2>
          <p className="about-description">
            Our mission is to deliver innovative, efficient solutions that go
            beyond merely meeting client expectations. We are driven by a
            commitment to excellence, seeking to transform challenges into
            opportunities through creative vision and the latest technological
            advancements. Each project we undertake is an opportunity to set a
            new standard of success, where our dedication to quality and detail
            shines through. At the heart of our mission is the belief in
            building lasting relationships with our clients, founded on the
            principles of trust, integrity, and mutual respect. We view every
            client interaction as a chance to deepen these values and create
            solutions that truly resonate.
          </p>
          </div>
        </div>
        <div className="about-x">
          <div className="about-text-section">
          <h2 className="about-subtitle">VALUE</h2>
          <p className="about-description">
            Our mission is to deliver innovative, efficient solutions that go
            beyond merely meeting client expectations. We are driven by a
            commitment to excellence, seeking to transform challenges into
            opportunities through creative vision and the latest technological
            advancements. Each project we undertake is an opportunity to set a
            new standard of success, where our dedication to quality and detail
            shines through. At the heart of our mission is the belief in
          </p>
          </div>
          <img
            src={ValueImage}
            alt="Vision Illustration"
            className="about-subimage"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default About;
