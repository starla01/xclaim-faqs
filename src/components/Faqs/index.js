import React, { useState } from "react";
import "./global.css";
import { data } from "../../constants/data";

function Faqs() {
  const [selectedMain, setSelectedMain] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [questionList, setQuestionsList] = useState(null);
  const [subQuestions, setSubQuestions] = useState(null);
  return (
    <div className="container-faqs">
      <div className="content">
        <h1>PREGUNTAS FRECUENTES</h1>
        <div className="selector">
          {data.map(({ name, icon, questions }, key) => {
            return (
              <div
                key={key}
                className={
                  (name === selectedMain && "option active") || "option"
                }
                onClick={() => {
                  setQuestionsList(questions);
                  setSelectedMain(name);
                }}
              >
                <img src={icon} alt={name} />
                <p>{name}</p>
              </div>
            );
          })}
          <div className="option custom">
            <p className="customSelectText">
              ¿NO ENCUENTRAS TU PREGUNTA? COMUNICATE CON NOSOTROS
            </p>
            <div className="middleContainer">
              <div className="middleOption">
                <img src="/arquivos/mail.png" alt="" />
                <a href="mailto:consulta@prismamoda.com">Mail</a>
              </div>
              <div className="middleOption">
                <img src="/arquivos/phone.png" alt="" />
                <a href="tel:+52552223-1010">552223-1010</a>
              </div>
            </div>
          </div>
          <div className="containerQuestions">
            <div className="questions">
              {questionList &&
                questionList.map(({ p, sQuestions }, key) => (
                  <div
                    className={
                      (selectedQuestion === p && "optionQuestion active") ||
                      "optionQuestion"
                    }
                    onClick={() => {
                      setSubQuestions(sQuestions);
                      setSelectedQuestion(p);
                    }}
                    key={key}
                  >
                    {p}
                  </div>
                ))}
            </div>
            <div className="subQuestions">
              {subQuestions && (
                <ul className="orderList">
                  {subQuestions &&
                    subQuestions.map((val, key) => (
                      <li className="optionList">
                        {key + 1}. {val}
                      </li>
                    ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
