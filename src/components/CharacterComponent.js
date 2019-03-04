import React from 'react'

const CharacterComponent = (props) => {

    console.log("character Component", props.wand.wood);


    return(

        <div>
            <h1>Name: {props.character.name}</h1>
            <h2>House: {props.character.house}</h2>
            <h2>Patronus: {props.character.patronus}</h2>
            <h3>Wand: {props.wand.wood} Core: {props.wand.core}</h3>
            <h3> Ancestry: {props.character.ancestry} </h3>
            <h4> Species: {props.character.species} </h4>
            <img src={props.character.image} alt={props.character.name} />
        </div>
    )

};

export default CharacterComponent