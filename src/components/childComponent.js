import React from 'react'


class ChildComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            companyName:""
        }
    }
    componentDidMount(){
        this.sendData();
    }
    sendData = () => {
        this.props.parentCallback("This is child data.");
    }
    render(){
        return (
            <div>
                <div>{this.props.fulldetails.name}</div>
                <div>{this.props.fulldetails.age}</div>
                <div>{this.props.fulldetails.address}</div>
                <div>{this.props.companyName}</div>
                <button type="button" onClick={() =>this.onSubmit("Ram")}>Submit Button</button>
            </div>
        )
    };
};

export default ChildComponent