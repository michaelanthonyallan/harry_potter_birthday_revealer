import React, {Component} from 'react';
import CharacterComponent from "../components/CharacterComponent";

class CharacterContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            character: ""
        }
    }


    componentWillReceiveProps() {
    const key = "$2a$10$VR.iXPk3xI.np7Icd5gF.OP70pCigCCqEgYcTso8Dn1Kfc09hMjdi";
        fetch(`https://www.potterapi.com/v1/characters?key=${key}`)
           .then(response => response.json())
            .then(data => this.setState({character: data[this.props.characterNumber.characterNumber]}));
     }




    render() {
        return(

            <div>
                <CharacterComponent character={this.state.character}/>
            </div>
        )
    }

}

export default CharacterContainer;