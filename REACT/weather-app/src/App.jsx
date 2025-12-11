import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { WeatherBox } from "./assets/components/WeatherBox";
import { WeatherButton } from "./assets/components/WeatherButton";

function App() {
  const [weather, setWeather] = useState(null);
  // 현제 위치 정보를 가져오는 함수
  const cities = ["paris", ""];
  const getCurrentLocation = () => {
    // console.log("getCurrentLocation");

    // 브라우저의 Geolocation API를 사용해 사용자의 현재 위치를 가져온다
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude; // 위도
      let lon = position.coords.longitude; // 경도
      //console.log("현재 위치", lat, lon);

      // 가져온 위치 정보를 기반으로 날씨 정보를 요청
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  // 위도(lat), 경도(lon)를 기반으로 OpenWeatherMap API에서 날씨 정보를 요청하는 비동기 함수
  const getWeatherByCurrentLocation = async (lat, lon) => {
    // OpenWeatherMap API 호출 URL
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0da267df6df505efc5912ab3760b00af&units=metric`;

    // 날씨 정보 요청 (비동기 HTTP 요청)
    let response = await fetch(url);

    // 응답을 JSON 형태로 파싱
    let data = await response.json();
    //console.log(data);

    setWeather(data);
  };

  // 1. 앱이 실행되자마자 현재위치 기반의 날씨가 보인다.
  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <>
      <div className="container">
        <WeatherBox weather={weather} />
        <WeatherButton />
      </div>
    </>
  );
}

export default App;
