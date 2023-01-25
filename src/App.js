import './App.css';
import axios from 'axios';
import { useState } from 'react';
function App() {

  const [city, setCity] = useState("");
  const [cityProps, setCityProps] = useState([]);
  const [state, setState] = useState(false)

  const handleChange = async (e) => {
    e.preventDefault()
    const api = API_KEY;
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    await axios.get(baseURL).then(res => {
      setCityProps(res.data)
      console.log(cityProps);
      setState(true)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleChange}>
          <input type="text" onChange={e => setCity(e.target.value)}></input>
          <br />
          <button>Verileri Getir</button>
        </form>

        {
          state ? <div>
            <h3>{cityProps.name}</h3>
            <h3>{cityProps.main.temp} °C</h3>
            <h3>{cityProps.weather[0].description}</h3>
            <h3>{cityProps.sys.country}</h3>
          </div> : null
        }

      </header>
    </div>
  );
}

export default App;
