import React, {Component} from 'react';
import FormContainer from "./FormContainer";
import CharacterContainer from "./CharacterContainer";

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characterNumber: ""
        };

        this.handleFormSubmission = this.handleFormSubmission.bind(this)
    }


    static characterNumberGenerator(props) {
        console.log(props);
        let i = (props.month * props.day * props.year);
        let result = '';
        do {
            if (i <= 194){
                result = i;
                break;
            }
            else{
                for (i; i >= 104; i*=0.10){
                    if(i<=194){
                        result = i;
                        break;
                    }
                    result = i;
                }

            }

            result = i;
        }
        while (i > 194);
        return Math.round(result);
    }


    handleFormSubmission(props){
        this.setState({characterNumber:AppContainer.characterNumberGenerator(props)})
    }



    render() {
        return(
            <div>
                <h1>Enter your birthday to reveal your Harry Potter character twin!</h1>
                <FormContainer handleFormSubmission={this.handleFormSubmission}/>
                <CharacterContainer characterNumber={this.state}/>
            </div>
        )
    }


}

export default AppContainer;