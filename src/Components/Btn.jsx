import styled from "styled-components"

const Btn = ({click,text,}) => {
  return (
    <>
    <Button onClick={click}>{text}</Button>
    </>
  )
}

export default Btn

const Button = styled.button`
    background-color: black;
    color: white;
    width: 13vw;
    height: 6vh;
    border-radius: 10px;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1.2rem;
    transition: 0.2s background ease-in;
    
    &:hover{
        background-color: white;
        color: black;
        border: 1.5px solid black;
        transition: 0.1s background ease-in;
    }
`