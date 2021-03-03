import React,{useState} from 'react';
import SubComponent from './subComponent';

function SetStateComponent(){
    const [count,setCount] = useState(0);
    const [answer, setAnswer] = useState("Yes")

    function increment(){
        setCount(prevVal => prevVal + 1)
    }
    function decrement(){
        setCount(prevVal => prevVal - 1);
        setAnswer("No")
    }
    return(
        <div>
            <p>{count}</p>
            <button type="button" onClick={() => increment()}>Increment</button>
            <button type="button" onClick={() => decrement()}>Decrement</button>
            <p>{answer}</p>
        </div>
    )
}

class MainComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            client:{
                name:"",
                age: "",
                qualification: ""
            },
            employee:{
                name:"",
                age: "",
                address: ""
            }
        }        
    }
    componentDidMount(){
        this.sendDataToChild();
    };
    sendDataToChild = () =>{
        this.setState({
            client:{
                name:"Pinky",
                age: 20,
                address: "10 + 2"
            }
        })
    }
    callBackFunction = (data) =>{
        this.setState({
            employee:{
                name:data.name,
                age: data.age,
                address: data.address
            }
        })
    }
    render(){
        return(
            <div>
                <SubComponent clientDetails={this.state.client} callBackFunction = {this.callBackFunction}/>
                <p>{this.state.employee.name}</p>
                <p>{this.state.employee.age}</p>
                <p>{this.state.employee.qualification}</p>
                <SetStateComponent/>
            </div>
        )
    }
}

export default MainComponent