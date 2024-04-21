import styled from "styled-components";
import Btn from "./Btn";
import { useState } from "react";

const StartGame = ({ toggle }) => {
 
  return (
    <Cont>
      <img
        src="https://static.vecteezy.com/system/resources/previews/004/753/305/original/three-dices-isolated-on-white-background-illustration-vector.jpg"
        alt=""
      />
      <div className="left">
        <h2>DICE GAME</h2>
        <Btn click={toggle} text={'Play Game'}/>
      </div>
    </Cont>
  );
};

const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 40vw;
  }

  .left {
    display: flex;
    flex-direction: column;
    align-items: end;
    h2 {
      font-weight: 900;
      font-size: 5vw;
      margin-bottom: 15px;
    }
    
  }
`;

export default StartGame;
