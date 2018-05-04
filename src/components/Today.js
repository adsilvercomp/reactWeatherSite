import React from "react";

class Today extends React.Component {

    render() {
        return (
         
            <div id="today">
                <h1 id="date">{this.props.date}</h1>
                <h1 id="description">{this.props.description}</h1>
                <h3 id="temperature">{this.props.temperature}</h3>
                <img id="icon" src = {this.props.icon}/>
            </div>    

            
        )
    }
}

export default Today;