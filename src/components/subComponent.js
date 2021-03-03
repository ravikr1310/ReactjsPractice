import React from 'react';


class SubComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            employee:{
                name:"Kalicharan",
                age: 200,
                address: "badnam pur"
            }
        }
    }
    componentDidMount(){
        this.sentDataToParent();
    }
    sentDataToParent =() =>{
        this.props.callBackFunction(this.state.employee)
    }

    render(){
        return(
            <div>
                <p>Name: {this.props.clientDetails.name}</p>
                <p>Age: {this.props.clientDetails.age}</p>
                <p>Qualification: {this.props.clientDetails.address}</p>
            </div>
        )
    }
}

export default SubComponent