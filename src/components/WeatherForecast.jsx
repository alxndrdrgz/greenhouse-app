const WeatherForecast = ({ data }) => {
  
  return (
    <div>
      <h1 className="font-bold">City: {data.name}</h1>
      {data.weather.map((i) => (
        <div key={i}>
          <p>{i.main}</p>
          <p>{i.description}</p>
        </div>
      ))}
      <div>
        <p>Temperature: {data.main.temp}</p>
        <p>Feels like: {data.main.feels_like}</p>
      </div>
    </div>
  )
};


export default WeatherForecast;
