class CityWeather extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    static get observedAttributes() {
      return ['city', 'detailed'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'city' && oldValue !== newValue) {
        this.fetchWeather();
      }
    }
  
    connectedCallback() {
      const savedCity = localStorage.getItem('selectedCity') || 'Los Angeles';
      if (!this.hasAttribute('city')) {
        this.setAttribute('city', savedCity);
      }
      this.fetchWeather();
    }
  
    async fetchWeather() {
      const apiKey = '7ef5e46c6c9f56fed09dd7ade873aabc'; // Replace with your OpenWeatherMap API key
      const city = encodeURIComponent(this.getAttribute('city'));
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === 200) {
          if (this.hasAttribute('detailed')) {
            this.renderDetailedWeather(data);
          } else {
            this.renderWeather(data);
          }
        } else {
          this.renderError(`City not found: ${city}`);
        }
      } catch (error) {
        this.renderError('Error fetching weather data.');
      }
    }
  
    renderWeather(data) {
      const weatherIcons = {
        Clear: '☀️',
        Clouds: '☁️',
        Rain: '🌧️',
        Snow: '❄️',
        Thunderstorm: '⛈️',
        Drizzle: '🌦️',
        Mist: '🌫️',
      };
  
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            font-family: 'Inter', sans-serif;
          }
          .weather-card {
            background: linear-gradient(135deg, #60a5fa, #2563eb);
            border-radius: 20px;
            padding: 2rem;
            color: white;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            text-align: center;
          }
          .city {
            font-size: 2rem;
            font-weight: 600;
          }
          .temperature {
            font-size: 4rem;
            font-weight: 600;
            margin: 1rem 0;
          }
          .weather-icon {
            font-size: 3rem;
          }
          .description {
            font-size: 1.2rem;
            margin-bottom: 1rem;
          }
        </style>
        <div class="weather-card">
          <div class="city">${data.name}</div>
          <div class="weather-icon">${weatherIcons[data.weather[0].main] || '🌡️'}</div>
          <div class="temperature">${data.main.temp}°C</div>
          <div class="description">${data.weather[0].description}</div>
        </div>
      `;
    }
  
    renderDetailedWeather(data) {
      const weatherIcons = {
        Clear: '☀️',
        Clouds: '☁️',
        Rain: '🌧️',
        Snow: '❄️',
        Thunderstorm: '⛈️',
        Drizzle: '🌦️',
        Mist: '🌫️',
      };
  
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            font-family: 'Inter', sans-serif;
          }
          .weather-card {
            background: linear-gradient(135deg, #60a5fa, #2563eb);
            border-radius: 20px;
            padding: 2rem;
            color: white;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            text-align: center;
          }
          .city {
            font-size: 2rem;
            font-weight: 600;
          }
          .temperature {
            font-size: 4rem;
            font-weight: 600;
            margin: 1rem 0;
          }
          .weather-icon {
            font-size: 3rem;
          }
          .description {
            font-size: 1.2rem;
            margin-bottom: 1rem;
          }
          .details {
            font-size: 1rem;
            margin-top: 1rem;
          }
          .details div {
            margin: 0.5rem 0;
          }
        </style>
        <div class="weather-card">
          <div class="city">${data.name}</div>
          <div class="weather-icon">${weatherIcons[data.weather[0].main] || '🌡️'}</div>
          <div class="temperature">${data.main.temp}°C</div>
          <div class="description">${data.weather[0].description}</div>
          <div class="details">
            <div>Feels Like: ${data.main.feels_like}°C</div>
            <div>Humidity: ${data.main.humidity}%</div>
            <div>Wind Speed: ${data.wind.speed} m/s</div>
            <div>Pressure: ${data.main.pressure} hPa</div>
          </div>
        </div>
      `;
    }
  
    renderError(message) {
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            font-family: 'Inter', sans-serif;
            text-align: center;
            color: red;
          }
        </style>
        <div>${message}</div>
      `;
    }
  }
  
  customElements.define('city-weather', CityWeather);
  
  // Synchronize city between pages
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#city-form');
    const input = document.querySelector('#city-input');
    const weatherWidget = document.querySelector('city-weather');
  
    if (form && input && weatherWidget) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const newCity = input.value.trim();
        if (newCity) {
          localStorage.setItem('selectedCity', newCity);
          weatherWidget.setAttribute('city', newCity);
        }
      });
    }
  });
  