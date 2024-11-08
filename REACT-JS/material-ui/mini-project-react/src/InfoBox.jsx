import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox ({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1691848746401-b40fdd5d823f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xlYXIlMjB3ZWF0aGVyfGVufDB8fDB8fHww"

    const HOT_URL = "https://images.unsplash.com/photo-1602194789455-8d0fb5673dfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";


    return (
        <div className="InfoBox">
            <div className='cardContainer'>
              <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={info.humidity > 80 ? RAIN_URL : (info.temp > 15 ? HOT_URL: COLD_URL)}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {info.city} {info.humidity > 80 ? <ThunderstormIcon /> : (info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />)}
              </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                    <div>Temperature = {info.temp} &deg;C</div>
                    <div>Humidiy = {info.humidity}</div>
                    <div>Min temp = {info.tempMin} &deg;C</div>
                    <div>Max temp = {info.tempMax} &deg;C </div>
                    <div>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike} &deg;C</div>
                </Typography>
              </CardContent>
              </Card>
            </div>
        </div>
    )
}