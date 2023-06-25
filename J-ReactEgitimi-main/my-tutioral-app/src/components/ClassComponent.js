import React from "react";

export default class ClassComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            property: "value",
        }
    }
    
    render(){
        return <h1>Class Component {this.state.property}</h1>
    }
}