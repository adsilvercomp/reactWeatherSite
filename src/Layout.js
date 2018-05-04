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
            weekDate: [],
            weekTemp: [],
            weekIcon: []
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


    today = (weatherArr) => {

        this.setState({ date: weatherArr[0].date.weekday + " " + weatherArr[0].date.month + "/" + weatherArr[0].date.day })

        this.setState({ description: weatherArr[0].conditions })

        this.setState({ temperature: "High " + weatherArr[0].high.fahrenheit + "°F" + " / " + "Low " + weatherArr[0].low.fahrenheit + "°F" })

        this.setState({ icon: weatherArr[0].icon_url })
    }



    thisWeek = (weatherArr) => {
        console.log("this is for thisWeek " + weatherArr);
        let dateArr = []
        let temperatureArr = []
        let iconArr = []
        for (let i = 1; i < weatherArr.length - 2; i++) {

            dateArr.push( weatherArr[i].date.weekday + " " + weatherArr[i].date.month + "/" + weatherArr[i].date.day )

            temperatureArr.push("High " + weatherArr[i].high.fahrenheit + "°F" + " / " + "Low " + weatherArr[i].low.fahrenheit + "°F")

            iconArr.push(weatherArr[i].icon_url)


        }
        console.log(dateArr);
        this.setState({ weekDate: dateArr })

        console.log(temperatureArr);
        this.setState({ weekTemp: temperatureArr })

        console.log(iconArr);
        this.setState({ weekIcon: iconArr })
        console.log("this is the weekIcon " +this.state.weekIcon);
    }


    render() {

        return (

            <div id="container">
                <Header1 />

                <Today date={this.state.date} description={this.state.description} temperature={this.state.temperature} icon={this.state.icon} />

                <Header2 />

                <ThisWeek date={this.state.weekDate} temp={this.state.weekTemp} icon={this.state.weekIcon}/>

                <Footer />

            </div>



        )
    }
}



export default Layout;