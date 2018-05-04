import React from "react";

class ThisWeek extends React.Component {

    render() {
        return (
            <section id="thisWeek">
                <ul id="weatherList">
                
                    {this.props.children}
                    
                </ul>
            </section>

        )
    }
}

export default ThisWeek;