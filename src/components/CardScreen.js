import React from "react";
import { BiRightArrow } from "react-icons/bi";
import { GiReturnArrow } from "react-icons/gi";

function CardStart({ question, i, updatingCard }) {
  let indexCard = i;
  return (
    <li className="Card" key={i}>
      <h3>Pergunta {i + 1}</h3>
      <BiRightArrow onClick={() => updatingCard(indexCard)} />
    </li>
  );
}

function CardOverturned({ question, i, changeStatus }) {
  const [virada, setVirada] = React.useState(false);

  return (
    <>
      {!virada ? (
        <li className="Card virado question" key={i}>
          <p>{question.question}</p>
          <GiReturnArrow onClick={() => setVirada(true)} />
        </li>
      ) : (
        <li className="Card virado" key={i}>
          <p>{question.answer}</p>
          <div className="Buttons">
            <div className="Button red" onClick={() => changeStatus(question, "errada")}>
              <p>Não lembrei</p>
            </div>
            <div
              className="Button orange"
              onClick={() => changeStatus(question, "quase")}
            >
              <p>Quase não lembrei</p>
            </div>
            <div className="Button green" onClick={() => changeStatus(question, "zap")}>
              <p>Quase não lembrei</p>
            </div>
          </div>
        </li>
      )}
    </>
  );
}

export default function CardScreen({
  question,
  setDeck,
  face,
  i,
  updatingCard,
  changeStatus
}) {
  return (
    <>
      {!face ? (
        <CardStart question={question} i={i} updatingCard={updatingCard} />
      ) : (
        <CardOverturned question={question} i={i} changeStatus={changeStatus}/>
      )}
    </>
  );
}
