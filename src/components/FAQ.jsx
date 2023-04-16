import React from "react";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const FAQ = ({ question, answer }) => {
    const [isAnsShow, setIsAnsShow] = useState(false);
  return (
    <article className="faq" onClick={() => setIsAnsShow(!isAnsShow)}>
      <div>
        <h4>{question}</h4>
        <button className="faq_icon">
          {
            isAnsShow ? <AiOutlineMinus/> : <AiOutlinePlus/> 
          }
        </button>
      </div>
      {isAnsShow && <p>{answer}</p>}
    </article>
  );
};

export default FAQ;

