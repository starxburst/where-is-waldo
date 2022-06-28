import React, { useState } from 'react';
import '../style/ContextMenu.css'

function ContextMenu(props) {

    const { characterList, menuCoordinateX, menuCoordinateY, handleMenuClick, menuOpen } = props;

    let menuContent = characterList.map((character) => {
        if (character.clicked === false) {
            return (
                <li className='item' id={character.id} onClick={(e) => handleMenuClick(e)}>{character.name}</li>
            )
        }
    })


    return (
        <div 
            className='menu-container'
            style={{ top: `calc(${menuCoordinateY}px)`, left: `${menuCoordinateX}px`, display: `${menuOpen}` }}>
            <ul className='list'>
                {menuContent}
            </ul>
        </div>
    )
}

export default ContextMenu;