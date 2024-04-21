import React from "react";
import styled from "styled-components";
import Btn from "./Btn";


const GameRules = ({ rule }) => {
  const arrBox = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <Nav>
        <div className="score">
          <h2>0</h2>
          <span>Total Score</span>
        </div>

        <div className="select">
          <p>You have not selected any number</p>
          <div className="boxs">
            {arrBox.map((value, i) => (
              <Box key={i}>{value}</Box>
            ))}
          </div>
          <div className="msg">Select Number</div>
        </div>
      </Nav>

      <Lower>
        <img src={`/images/dice_1.png`} alt="" />
        <div className="msg">Click on Dice to Roll</div>

        <Btns>
          <Btn  text={"Reset Score"} />
          <Btn  text={"Show Rules"} />
        </Btns>
      </Lower>

      <Rule>
      <h3>How to play dice game</h3>
      <p>1. Select any number</p>
      <p>2. Click on dice image</p>
      <p>3. After click on  dice  if selected number is equal to dice number you will get same point as dice </p>
      <p>4. if you get wrong guess then  2 point will be dedcuted </p>
      </Rule>

  <B>
      <Btn click={rule} text={'Back'}/>
  </B>
    </>
  );
};

export default GameRules;

const B = styled.div`
  margin-left: 43vw;
`

const Rule = styled.div`
    background-color: #ffebee;
    margin: 0.8vw  10vw;
    padding: 1px 10px;

    h3{
        font-size: 2vw;
        font-weight: 2vw;
        margin-top: 2px;
        margin-bottom: 1px;
    }

    p{
          font-size: 1.3vw;
          font-weight: 700;
    }
`

const Btns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2vw;
  align-items: center;
  justify-content: center;
  margin-top: 0.3;
`;

const Lower = styled.div`
  margin-top: -1vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 1.8vw;
  font-weight: 800;

  img{
    width: 20vh;
  }
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
  padding: 5px 10px;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;