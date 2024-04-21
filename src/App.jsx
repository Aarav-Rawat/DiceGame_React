
import StartGame from './Components/StartGame'
import { useState } from 'react'
import PlayGame from './Components/PlayGame'
import GameRules from './Components/GameRules';

function App() {

  const [isGameStarted, setisGameStarted] = useState(false);
  const [showRule, setshowRule] = useState(false)

  const toggleGamePlay = ()=>{
    setisGameStarted((prev)=>!prev)
  };

  const rule = ()=>{
    setshowRule((prev)=>!prev)
  };

  return (
    <>
    {
       isGameStarted? (showRule?<GameRules rule={rule}/>:<PlayGame rule={rule} toggle={toggleGamePlay} />) : <StartGame toggle={toggleGamePlay} />
     
    }
   
    </>
  )
}

export default App
