import React from "react";

class Header1 extends React.Component {

 


    render() {
       
            return (

                <div id="headerBox" onClick={() => { this.headerStyle() }}>
                    <h1 className="header">New York City Weather App</h1>
                </div>

            )
        
    }
}

export default Header1;