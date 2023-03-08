import BannerCard from './BannerCard'
import styles from '../styles/Weather.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBolt, 
    faCloud, 
    faCloudFog, 
    faClouds, 
    faFaceClouds, 
    faFaceSmile, 
    faSnowman, 
    faUmbrella, 
    faUmbrellaAlt, 
    faHatWinter, 
    faBlockQuestion
} from '@fortawesome/pro-regular-svg-icons';

import { 
    faBolt as faBoltDuo, 
    faCloud as faCloudDuo, 
    faCloudFog as faCloudFogDuo, 
    faClouds as faCloudsDuo, 
    faFaceClouds as faFaceCloudsDuo, 
    faFaceSmile as faFaceSmileDuo, 
    faSnowman as faSnowmanDuo, 
    faUmbrella as faUmbrellaDuo, 
    faUmbrellaAlt as faUmbrellaAltDuo, 
    faHatWinter as faHatWinterDuo,
    faBlockQuestion as faBlockQuestionDuo 
} from '@fortawesome/pro-duotone-svg-icons';

export default function Weather({weatherData}) {

    const setLocalDate = (unixEpochDate) => {
        const dateObj = new Date(unixEpochDate * 1000)
            const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            const dateOptions = {
                timeZone: timeZone,
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            }
            const timeOptions = {
                timeZone: timeZone,
                hours: 'numeric',
                hour12: false
            }
            const localDate = dateObj.toLocaleString('en-us', dateOptions)
            const localTime = dateObj.toLocaleTimeString('en-us', timeOptions)
            return {date: localDate, time: localTime}
    }

    const setTargetDates = (daysToAdd) => {
        const targetDates = []
        const addDays = (daysToAdd) => {
           const today = new Date();
           const updatedDate = new Date(today.setDate(today.getDate() + daysToAdd))
           return updatedDate.toLocaleString('en-us',{year: 'numeric', month:'2-digit', day: '2-digit'});
        };
        for (let i = 0; i < daysToAdd; i++) {
            targetDates.push(addDays(i))
        }
        return targetDates
    }
    const targetDates = (setTargetDates(5))
    const weatherIcon = (description) => {
        switch(description) {
            case 'clear sky':
                return({
                    reg: <FontAwesomeIcon icon={faFaceSmile} />,
                    duo: <FontAwesomeIcon icon={faFaceSmileDuo} />,
                    comment: 'enjoy the weather!',
                })
            case 'few clouds':
                return ({
                    reg: <FontAwesomeIcon icon={faCloud} />,
                    duo: <FontAwesomeIcon icon={faCloudDuo} />,
                    comment: 'a bit cloudy today, eh?',
                })
            case 'scattered clouds':
                return ({
                    reg: <FontAwesomeIcon icon={faClouds} />,
                    duo: <FontAwesomeIcon icon={faCloudsDuo} />,
                    comment: 'Quite a bit cloudy, eh?',
                })
            case 'broken clouds':
                return ({
                    reg: <FontAwesomeIcon icon={faFaceClouds} />,
                    duo: <FontAwesomeIcon icon={faFaceCloudsDuo} />,
                    comment: 'starting to clear up',
                })
            case 'overcast clouds':
                return ({
                    reg: <FontAwesomeIcon icon={faCloudFog} />,
                    duo: <FontAwesomeIcon icon={faCloudFogDuo} />,
                    comment: 'pea soup!',
                })
            case 'shower rain':
                return ({
                    reg: <FontAwesomeIcon icon={faUmbrella} />,
                    duo: <FontAwesomeIcon icon={faUmbrellaDuo} />,
                    comment: 'is it wet enough for you?',
                })
            case 'rain':
                return ({
                    reg: <FontAwesomeIcon icon={faUmbrellaAlt} />,
                    duo: <FontAwesomeIcon icon={faUmbrellaAltDuo} />,
                    comment: "it's lashing outside! best stay indoors!",
                })
            case 'thunderstorm':
                return ({
                    reg: <FontAwesomeIcon icon={faBolt} />,
                    duo: <FontAwesomeIcon icon={faBoltDuo} />,
                    comment: 'thunder and lightning-- how very exciting!',
                })
            case 'snow':
                return ({
                    reg: <FontAwesomeIcon icon={faSnowman} />,
                    duo: <FontAwesomeIcon icon={faSnowmanDuo} />,
                    comment: 'yuck.',
                })
            case 'light snow':
                return ({
                    reg: <FontAwesomeIcon icon={faHatWinter} />,
                    duo: <FontAwesomeIcon icon={faHatWinterDuo} />,
                    comment: 'it could be worse...',

                })
            case 'mist':
                return ({
                    reg: <FontAwesomeIcon icon={faCloud} />,
                    duo: <FontAwesomeIcon icon={faCloudDuo} />,
                    comment: "I'm getting misty just thinking about this weather.",
                })
            default: 
                return ({
                    reg: <FontAwesomeIcon icon={faBlockQuestion} />,
                    duo: <FontAwesomeIcon icon={faBlockQuestionDuo} />,
                    comment: 'this is some weather we are having, no?',
                })
            }            
        }

    const getForecastByDay = (targetDate) => {
        const dailyForecast = weatherData.list.filter(forecast => {
            return setLocalDate(forecast.dt).date.includes(targetDate)
        })
        const forecast = dailyForecast.map(forecast => {
            const militaryTime = parseInt(setLocalDate(forecast.dt).time.slice(0,2))
            const hrs = militaryTime > 12 ? {time: militaryTime - 12, amPM: 'PM'} : {time: militaryTime, amPM: 'AM'}
            return (
                <section className={styles.forecastCard} key={forecast.dt}>
                    <div className={styles.forecastTime}>{hrs.time}{hrs.amPM}</div>
                    <div className={styles.forecastIcon}>{weatherIcon(forecast.weather[0].description).reg}</div>
                    <div className={styles.forecastTemp}>{forecast.main.temp.toFixed(1)}°<span className={styles.forecastTempUOM}>F</span></div>
                    
                    <div className={styles.forecastDescr}>{forecast.weather[0].description}</div>
                </section>
        )})
        return forecast
    }
    const setCurrentForecast = () => {
        const todaysWeather = weatherData.list[0]
        console.log({todaysWeather: todaysWeather})
        return (
            <div className={styles.todayCard}>
                <div className={styles.todayCity}>{weatherData.city.name}</div>
                <div className={styles.todayIcon}>{weatherIcon(todaysWeather.weather[0].description).duo}</div>
                <div className={styles.todayTemp}>&nbsp;{todaysWeather.main.temp.toFixed(1)}°</div>
                <div className={styles.todayHiLo}>H:{todaysWeather.main.temp_max.toFixed(1)} L:{todaysWeather.main.temp_min.toFixed(1)}</div>
                <div className={styles.todayDescr}>{todaysWeather.weather[0].main}</div>

            </div>
        )
    }

    const futureForecast = targetDates.slice(1,targetDates.length).map(day => {
        const dailyTemps = weatherData.list.filter(weather => setLocalDate(weather.dt).date.includes(day)).map(thisDay => thisDay.main.temp);
        const hiTemp = dailyTemps.reduce((acc, val)=> acc > val ? acc : val);
        const loTemp = dailyTemps.reduce((acc, val)=> acc < val ? acc : val);
        
        return (
            <BannerCard
                key={day}    
                title={day}
                description = {`H:${hiTemp.toFixed(1)}° / L:${loTemp.toFixed(1)}°`}
                contents={getForecastByDay(day)}
                contentStyle={styles.forecastContents}
            />
        )
    })
    return (
    <>
        {setCurrentForecast()}
        {futureForecast}
    </>
    )
};