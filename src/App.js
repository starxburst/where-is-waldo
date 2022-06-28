import './App.css';
import { BrowserRouter as Router, Switch, Routes, Route } from "react-router-dom";
import Logo from './components/Logo';
import Stopwatch from './components/StopWatch';
import { useStopwatch } from 'react-timer-hook';
import Nav from './components/Nav';
import GamePage from './components/GamePage';
import { useEffect, useState } from 'react';
import { db } from './firebase/config';
import { collection, getDocs } from "firebase/firestore";


function App() {  

  const {
    seconds,
    minutes,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });

  /*const data = [
    {
      name: 'Azir',
      id: 0,
      clicked: false,
      coordinateMinX: 1095,
      coordinateMaxX: 1155,
      coordinateMinY: 769,
      coordinateMaxY: 841
    },
    {
      name: 'Corki',
      id: 1,
      clicked: false,
      coordinateMinX: 146,
      coordinateMaxX: 204,
      coordinateMinY: 145,
      coordinateMaxY: 194
    },
    {
      name: 'Twisted Fate',
      id: 2,
      clicked: false,
      coordinateMinX: 344,
      coordinateMaxX: 453,
      coordinateMinY: 1277,
      coordinateMaxY: 1409
    }
  ]
  */


 
  const gameImageCoordinate = {x: 1169, y: 1678};

  const [characterList, setCharacterList] = useState([{clicked: false}]);

  const getFirebase = async () => {
    let data = {};
    const querySnapshot = await getDocs(collection(db, "app"));
    querySnapshot.forEach((doc) => {
    /*console.log(`${doc.id} => ${doc.data()}`);*/
    data = doc.data();
    /*console.log(data.characterList);*/
    });
    setCharacterList(data.characterList);
  }

  useEffect(() => {
    getFirebase();
  },[]);

  return (
    <Router>
      <div className="App">
        <div className='nav-container'>
          <Logo/>
          <Stopwatch
            minutes={minutes}
            seconds={seconds}
            start={start}
            pause={pause}
            reset={reset}/>
          <Nav/>
        </div>
        <div className='game-page-container'>
          <GamePage characterList={characterList} setCharacterList={setCharacterList} gameImageCoordinate={gameImageCoordinate} pause={pause}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
