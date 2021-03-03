import React from 'react';


class ChildA extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name : "This is Child Data"
        }
    }
    componentDidMount(){
        this.sendToParent()
    }
    sendToParent = () =>{
        this.props.childData(this.state.name)
    }
    render(){
        return (
            <div>
                {/* <p>this is child component</p> */}
            </div>
        )
    };
};

export default ChildA