import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';


export default function WeatherApp () {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Wonderland",
        feelsLike: 25.41,
        temp: 25.69,
        tempMin: 25.69,
        tempMax: 25.69,
        humidity: 42,
        weather: "clear sky"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo); //re-rendering
    }

    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}