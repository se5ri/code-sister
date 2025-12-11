export function WeatherBox({ weather }) {
  console.log("weather?", weather);
  return (
    <>
      <div className="weather-Box">
        {/* weater가 참이면 name을 보여줘라 */}
        <div>{weather?.name}</div>
        <h2>
          {weather?.main.temp}도 / {weather?.main.temp * 1.8 + 32}화씨
        </h2>
        <h3>{weather?.weather[0].description}</h3>
      </div>
    </>
  );
}
