import { useEffect, useState } from 'react';
import '../style/GamePage.css'
import gamePagePicture from '../assets/game_page.jpg'
import ContextMenu from "./ContextMenu";

function GamePage(props) {

    const [menuCoordinate, setMenuCoordinate] = useState({x: 0, y: 0});
    const [actualCoordinate, setActualCoordinate] = useState ({});
    const [menuOpen, setMenuOpen] = useState('none');

    const { characterList, gameImageCoordinate, setCharacterList, pause } = props;

    useEffect(() => {
        handleWin();
    },[characterList]);

    const handleImageClick = (e) => {
        setMenuOpen('');
        const xCoor = e.pageX;
        const yCoor = e.pageY;
        setMenuCoordinate({x: xCoor, y: yCoor});

        /*-------------------------------------*/

        const x = e.pageX - e.target.offsetLeft;
        const y = e.pageY - e.target.offsetTop;
        const imageX = e.target.offsetWidth;
        const imageY = e.target.offsetHeight;

        const relativeX = x / imageX;
        const relativeY = y / imageY;

        const actualX = relativeX * gameImageCoordinate.x;
        const actualY = relativeY * gameImageCoordinate.y;

        console.log(actualX);
        console.log(actualY);

        setActualCoordinate({x: actualX, y: actualY});
    }

    const handleMenuClick = (e) => {
        const id = e.target.getAttribute('id');
        console.log(id);
        if(actualCoordinate.x >= characterList[id].coordinateMinX && actualCoordinate.x <= characterList[id].coordinateMaxX && actualCoordinate.y >= characterList[id].coordinateMinY && actualCoordinate.y <= characterList[id].coordinateMaxY) {
            console.log(`You found ${characterList[id].name}`);
            let tempCharacterList = [...characterList];
            let tempItem = {...characterList[id]};
            tempItem.clicked = true;
            tempCharacterList[id] = tempItem;
            setCharacterList(tempCharacterList);
        }
    }

    const handleWin= () => {
        if(characterList.every(character => character.clicked === true)){
            console.log(`You Win This Game!!!!!!!!!!!`);
            pause();
        }
    }



    return (
        <div className="game-page-image-container">
            <ContextMenu characterList={characterList} menuCoordinateX={menuCoordinate.x} menuCoordinateY={menuCoordinate.y} handleMenuClick={handleMenuClick} menuOpen={menuOpen}/>
            <img src={gamePagePicture} alt='game-page' onClick={(e) => handleImageClick(e)}></img>
        </div>
    )
}

export default GamePage;