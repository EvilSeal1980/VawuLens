import React from "react";
import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import "./About.css";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos id
        laudantium distinctio quod dolor quam libero aliquam modi sunt nesciunt.
      </Header>

      <section className="about_story">
        <div className="container about_story-container">
          <div className="about_section-image">
            <img src={StoryImage} alt="Our Story" />
          </div>
          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              molestias iste dicta consequuntur quibusdam ad eligendi veritatis,
              autem dignissimos dolores nostrum saepe amet officia architecto
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
              facilis inventore optio architecto quo a eius est natus at minus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, voluptate.
            </p>
          </div>
        </div>
      </section>

      <section className="about_Vision">
        <div className="container about_Vision-container">
          <div className="about_section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              molestias iste dicta consequuntur quibusdam ad eligendi veritatis,
              autem dignissimos dolores nostrum saepe amet officia architecto
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
              est voluptatibus vitae eius illo facere quos totam quia, esse
              amet!
            </p>
          </div>
          <div className="about_section-image">
            <img src={VisionImage} alt="Our Vision" />
          </div>
        </div>
      </section>

      <section className="about_mission">
        <div className="container about_mission-container">
          <div className="about_section-image">
            <img src={MissionImage} alt="Our Mission" />
          </div>
          <div className="about_section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              molestias iste dicta consequuntur quibusdam ad eligendi veritatis,
              autem dignissimos dolores nostrum saepe amet officia architecto
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, voluptate.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
