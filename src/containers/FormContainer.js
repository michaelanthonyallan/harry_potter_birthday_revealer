import React, {Component} from 'react'
import FormComponent from "../components/FormComponent";

class FormContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            month:"",
            day:"",
            year:""
        };

        this.handleBirthdaySubmit = this.handleBirthdaySubmit.bind(this);
    }


    handleBirthdaySubmit(birthday){
        this.setState({day:birthday.day});
        this.setState({month:birthday.month});
        this.setState({year:birthday.year});

        this.props.handleFormSubmission(birthday)
    }


    render() {
        return(
            <div>
                <FormComponent handleBirthdaySubmit={this.handleBirthdaySubmit}/>
            </div>
        )
    }

}

export default FormContainer;