import styled from "styled-components";

export default function TelaInicial({ setVisible }) {
  
  return (
    <Login>
      <nav>
        <img src="img/image 1.svg" alt="" />
        <h1>ZapRecall</h1>
        <Button onClick={() => setVisible(false)}>Iniciar Recall!</Button>
      </nav>
    </Login>
  );
}

const Login = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;

  nav {
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  img {
    width: 136px;
    height: 161px;
    margin-bottom: 20px;
  }

  h1 {
    font-family: "Righteous", cursive;
    font-size: 36px;
    line-height: 45px;
    margin-bottom:34px;
    color: #ffffff;
  }
`;

const Button = styled.div`
    width: 246px;
    height: 54px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #ffffff;
    border: 1px solid #d70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
  
  &:hover{
    opacity: 0.8;
    cursor: pointer;
  }
`
