import React, { useState } from "react";
import styled from "styled-components";
import Btn from "./Btn";

const PlayGame = ({rule,toggle}) => {
  const arrBox = [1, 2, 3, 4, 5, 6];
  const [selectedNum, setselectedNum] = useState();
  const [diceNum, setdiceNum] = useState(1);
  const [score, setscore] = useState(0);
  const [error, seterror] = useState("");

  const reset = () => {
    setdiceNum(1);
    setscore(0);
    setselectedNum(undefined);
  };

  const rollDice =  () => {
    if (selectedNum === undefined) {
      seterror("You have not selected any number");
      return;
    }

    const newDiceNum = Math.ceil(Math.random() * 6);
    setdiceNum(newDiceNum);

    if (selectedNum === newDiceNum) {
      setscore((prev) => prev + diceNum);
    } else {
      setscore((prev) => prev - 2);
    }

    setselectedNum(undefined);
  };

  return (
    <>
      <Nav>
        <div className="score">
          <h2>{score}</h2>
          <span>Total Score</span>
        </div>

        <div className="select">
          <p>{error}</p>
          <div className="boxs">
            {arrBox.map((value, i) => (
              <Box
                isSelected={value === selectedNum}
                onClick={() => {
                  setselectedNum(value);
                  seterror("");
                }}
                key={i}
              >
                {value}
              </Box>
            ))}
          </div>
          <div className="msg">Select Number</div>
        </div>
      </Nav>

      <Lower>
        <img onClick={rollDice} src={`/images/dice_${diceNum}.png`} alt="" />
        <div className="msg">Click on Dice to Roll</div>

        <Btns>
          <Btn click={reset} text={"Reset Score"} />
          <Btn click={rule} text={"Show Rules"} />
          <Btn click={toggle} text={"Back"} />
        </Btns>
      </Lower>
    </>
  );
};

export default PlayGame;

const Btns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7vw;
  align-items: center;
  justify-content: center;
  margin-top: 2vw;
`;

const Lower = styled.div`
  margin-top: 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 1.8vw;
  font-weight: 800;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: -1vw 2vw;
  font-size: 1.5rem;
  font-weight: 900;

  .score {
    h2 {
      font-size: 4rem;
      margin: 10px 0px;
    }
  }

  .select {
    p {
      color: red;
      margin-bottom: 0;
      margin-top: 10px;
    }
    .msg {
      margin-left: 20vw;
      margin-top: 0.5vw;
    }
    .boxs {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }
  }
`;

const Box = styled.div`
  border: 1.5px solid black;
  font-size: 2rem;
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  transition: 0.1s background ease-out;

  &:hover{
    background-color: gray;
    transition: 0.1s background ease-in;
  }
`;
