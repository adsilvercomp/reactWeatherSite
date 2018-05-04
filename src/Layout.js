import React from "react";
import { Header1, Header2 } from "./components/Header";
import { Today, ThisWeek, Footer } from "./components";
import axios from "axios";

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            description: "",
            temperature: "",
            icon: "",
            apiData: []
        };
    }

    componentDidMount() {
        const context = this
        axios.get("http://api.wunderground.com/api/a9ff9939e8d6ed37/forecast10day/q/NY/New_York.json")
            .then(function (response) {
                let weatherArr = (response.data.forecast.simpleforecast.forecastday);

                context.today(weatherArr);

                context.thisWeek(weatherArr);

            })
    }


    thisWeek(weatherArr) {
           const context = this
           let DataArr = []
        for(let i=1; i<weatherArr.length-2; i++){
            DataArr.push(weatherArr[i])
        }
        context.setState({apiData: DataArr})
        console.log(this.state.apiData);
    }


    today = (weatherArr) => {

        this.setState({ date: weatherArr[0].date.weekday + " " + weatherArr[0].date.month + "/" + weatherArr[0].date.day })

        this.setState({ description: weatherArr[0].conditions })

        this.setState({ temperature: "High " + weatherArr[0].high.fahrenheit + "°F" + " / " + "Low " + weatherArr[0].low.fahrenheit + "°F" })

        this.setState({ icon: weatherArr[0].icon_url })
    }






    render() {

        return (

            <div id="container">
                <Header1 />

                <Today date={this.state.date} description={this.state.description} temperature={this.state.temperature} icon={this.state.icon} />

                <Header2 />

                <ThisWeek>
                    
                    {this.state.apiData.map(item =>{
                        return(
                            <li>
                              <h1> {item.date.weekday} {item.date.month} / {item.date.day} <br/> High {item.high.fahrenheit} °F <br/> Low {item.low.fahrenheit} °F</h1> 
                              <img src={item.icon_url}/>
                              <hr/>
                            </li>    
                        )
                    })}
                        
                    
                </ThisWeek>    

                <Footer />

            </div>



        )
    }
}



export default Layout;