import React from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { FaCrown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import { programs } from "../data";
import SectionHead from "./SectionHead";

const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs_container">
        <SectionHead icon={<FaCrown />} title="Programs" />
        <div className="programs_wrapper">
          {programs.map(({ id, icon, title, info, path }) => {
            return (
              <Card key={id} className="programs_program" kry={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className="btn sm">
                  Learn More <AiFillCaretRight />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
