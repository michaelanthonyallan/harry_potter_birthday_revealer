import React from 'react'

const CharacterComponent = (props) => {


    return(

        <div>
            <h1>Name: {props.character.name}</h1>
            <h2>Role: {props.character.role}</h2>
            <h2>House: {props.character.house}</h2>
            <h3>Boggart: {props.character.boggart}</h3>
        </div>
    )
};

export default CharacterComponent