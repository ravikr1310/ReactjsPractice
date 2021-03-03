import React from 'react';
import ChildComponent from './childComponent'


class ParentComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            details :{
                name: "",
                age: "",
                address:""
            },
            company: "",
            message: ""
        }       
    }
    componentDidMount(){
        this.userDetails();
    }
    userDetails = () =>{
        this.setState({
            details :{
                name: "Deepak",
                age: 100,
                address:"Kolkatta"
            },
            company: "BBH Pvt. Ltd."
        })
    }
    callbackFunction = (childData) => {
        this.setState({message: childData})
    }
  
    render(){
        return (
            <div>
                <ChildComponent fulldetails={this.state.details} companyName={this.state.company} parentCallback = {this.callbackFunction}/>
                <p> {this.state.message} </p>
            </div>
        )
    };
};

export default ParentComponent