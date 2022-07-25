import React from "react";
import styled from "styled-components";
import CardScreen from "./CardScreen";


const newDeck = [];
function CreadDeck() {
  const arrayQuestions = [
    {
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript.",
      tapped: false,
      status: "notAnswer",
    },
    {
      question: "O React é __",
      answer: "uma biblioteca JavaScript para construção de interfaces.",
      tapped: false,
      status: "notAnswer",
    },
    {
      question: "Componentes devem iniciar com __ ",
      answer: "letra maiúscula.",
      tapped: false,
      status: "notAnswer",
    },
    {
      question: "O ReactDOM nos ajuda __",
      answer: "interagindo com a DOM para colocar componentes React na mesma.",
      tapped: false,
      status: "notAnswer",
    },
  ];

  arrayQuestions.forEach((value) => newDeck.push({ ...value }));
  newDeck.sort(() => Math.random() - 0.5);

  return newDeck;
}
CreadDeck();

export default function QuestionsScreen() {
  const [Deck, setDeck] = React.useState(newDeck);
  const [answered, setAnswered] = React.useState(0);
  const [typeanswer, setTypeanswer] = React.useState([]);

  function updatingCard(indexCard) {
    let updatingDeck = newDeck.map((question, i) => {
      if (i === indexCard) {
        return {
          ...question,
          tapped: true,
        }
      } else {
        return {
          ...question,
          tapped: false,
        }
      }
    })

    setDeck([...updatingDeck]);
  }

   function changeStatus(indexCard, status) {
     let updatingDeck = newDeck.map((question, i) => {
         if (i === indexCard) {
             return {
                 ...question,
                 tap: false,
                 status: status,
             }
         } else {
             return {
                 ...question,
                 tap: false,
             }
         }
     })
     setDeck([...updatingDeck]);
     setAnswered(answered + 1);

     setTypeanswer([...typeanswer, status]);
   }

  return (
    <>
      <Top>
        <img src="img/image 1.svg" alt="" />
        <h2>ZapRecall</h2>
      </Top>
      <Corpo>
        <ul>
          {Deck.map((question, i) => (
            <CardScreen
              key={i}
              i={i}
              face={question.tapped}
              question={question}
              setDeck={setDeck}
              updatingCard={updatingCard}
              changeStatus={changeStatus}
            />
          ))}
        </ul>
      </Corpo>
      <Footer>
        <h4>{typeanswer.length}/4 CONCLUÍDOS</h4>
      </Footer>
    </>
  );
}

const Top = styled.div`
  margin: 50px auto;
  width: 235px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 52px;
    height: 60px;
  }
  h2 {
    font-family: "Righteous", cursive;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
  }
`;

const Corpo = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Footer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  background-color: #ffffff;

  h4 {
    font-size: 18px;
    line-height: 22px;

    color: #333333;
  }
`;
