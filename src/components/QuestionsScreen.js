import styled from "styled-components";
import { BiRightArrow } from "react-icons/bi";
import { GiReturnArrow } from "react-icons/gi";

export default function QuestionsScreen() {
  return (
    <>
      <Top>
        <img src="img/image 1.svg" alt="" />
        <h2>ZapRecall</h2>
      </Top>
      <Corpo>
        <ul>
          <Card>
            <h3>Pergunta</h3>
            <BiRightArrow />
            <GiReturnArrow />
          </Card>
          <Card>
            <h3>Pergunta</h3>
            <BiRightArrow />
            <GiReturnArrow />
          </Card>
          <Card>
            <h3>Pergunta</h3>
            <BiRightArrow />
            <GiReturnArrow />
          </Card>
          <Card>
            <h3>Pergunta</h3>
            <BiRightArrow />
            <GiReturnArrow />
          </Card>
        </ul>
      </Corpo>
      <Footer>
        <h4>0/4 CONCLUÍDOS</h4>
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

const Card = styled.li`
  width: 300px;
  height: 60px;
  margin-bottom: 25px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 23px 15px;

  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    color: #333333;
  }
  svg {
    width: 20px;
    height: 23px;
  }
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
