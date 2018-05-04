import React from "react";

class ThisWeek extends React.Component {

    render() {
        return (
            <section id="thisWeek">
                <ul id="weatherList">
                    <li>
                       
                        <h1>{this.props.date[0]}</h1>
                        <br />
                        <h1>{this.props.temp[0]}</h1>
                        <br />
                        <img src={this.props.icon[0]} />
                       
                        <hr/>
                    </li>


                    <li>
                        {this.props.date[1]}
                        <br />
                        {this.props.temp[1]}
                        <br />
                        <img src={this.props.icon[1]} />
                        <hr/>
                    </li>


                    <li>
                        {this.props.date[2]}
                        <br />
                        {this.props.temp[2]}
                        <br />
                        <img src={this.props.icon[2]} />
                        <hr/>
                    </li>


                    <li>
                        {this.props.date[3]}
                        <br />
                        {this.props.temp[3]}
                        <br />
                        <img src={this.props.icon[3]} />
                        <hr/>
                    </li>


                    <li>
                        {this.props.date[4]}
                        <br />
                        {this.props.temp[4]}
                        <br />
                        <img src={this.props.icon[4]} />
                        <hr/>
                    </li>


                    <li>
                        {this.props.date[5]}
                        <br />
                        {this.props.temp[5]}
                        <br />
                        <img src={this.props.icon[5]} />
                        <hr/>
                    </li>
                </ul>
            </section>

        )
    }
}

export default ThisWeek;