import React from 'react';
import ReactDOM from 'react-dom/client'

class Car extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "Volvo",
            color: "Red",
            person: {
                name: "Taner"
            }
        }
    }
    

    changeColor = (color) => {
        this.setState({color: color})
    }

    render() {

        return (
            <>
            <ul>
                <li>Araba markası {this.state.name}</li>
                <li>Araba rengi {this.state.color}</li>
                <li>Araba sahibi {this.state.person.name}</li>
                <li>Arabanın Olması Gereken Renk {this.props.color[0]}</li>
            </ul>
            <button onClick={()=> this.changeColor("blue")}>Rengi Blue Yap</button>
            </>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<Car color={["Ahmet","Mehmet"]} list={[1,2,3]}/>
)